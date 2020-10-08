import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dashboards: [],
    dashboard: {
      dashboard: null,
      widgets: []
    }
  },
  actions: {
    async loadDashboards({ commit }) {
      await axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/dashboards`)
        .then(response => response.data._embedded.dashboardResourceList)
        .then(dashboards => {
          commit("SET_DASHBOARDS", dashboards);
        })
        .catch(() => {
          console.log("No dashboards available");
        });
    },
    async loadDashboard({ commit }, slug) {
      await axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}`)
        .then(response => response.data)
        .then(dashboard => {
          commit("SET_DASHBOARD", dashboard);
        })
        .catch(error => {
          if (error.response.status === 404) {
            Vue.$snotify.error(`Dashboard with slug "${slug}" does not exist`);
          }
        });
    },
    async addDashboard({ commit }, dashboard) {
      await axios
        .post(`${process.env.VUE_APP_BASE_URL}/api/dashboards`, {
          name: dashboard.name,
          slug: dashboard.slug,
          description: dashboard.description
        })
        .then(response => response.data)
        .then(dashboard => {
          commit("ADD_DASHBOARD", dashboard);
          Vue.$snotify.success(
            `Dashboard "${dashboard.name}" has been created!`
          );
        })
        .catch(error => {
          if (error.response.status === 400) {
            Vue.$snotify.error(
              `Dashboard "${dashboard.name}" with slug "${dashboard.slug}" already exists`
            );
          }
        });
    },
    async deleteDashboard({ commit }, { slug, name }) {
      await axios
        .delete(`${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}`)
        .then(() => {
          commit("DELETE_DASHBOARD", slug);
          Vue.$snotify.success(`Dashboard "${name}" has been deleted!`);
        })
        .catch(error => {
          if (error.response.status === 404) {
            Vue.$snotify.error(`Dashboard "${name}" does not exist`);
          }
        });
    },
    async loadWidgets({ commit }, slug) {
      await axios
        .get(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}/widgets/all`
        )
        .then(response => response.data._embedded.widgetConfigResourceList)
        .then(widgets => {
          commit("SET_WIDGETS", widgets);
        })
        .catch(() => {
          Vue.$snotify.warning("No widgets available", {
            timeout: 5000
          });
        });
    },
    async addDivider({ commit }, { slug, divider }) {
      await axios
        .post(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}/widgets`,
          {
            title: divider.title,
            description: divider.description,
            type: "divider"
          }
        )
        .then(response => response.data)
        .then(divider => {
          commit("ADD_WIDGET", divider);
          Vue.$snotify.success(
            `Divider widget "${divider.title}" has been created!`
          );
        });
    },
    async addJenkins({ commit }, { slug, jenkins }) {
      await axios
        .post(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}/widgets`,
          {
            title: jenkins.title,
            type: "jenkins",
            sourceConfigs: [
              {
                id: "jenkins",
                type: "urlSource",
                interval: jenkins.interval * 1000,
                configData: {
                  url: jenkins.url,
                  enableSslVerification: !jenkins.selected,
                  username: jenkins.username,
                  password: jenkins.password
                }
              }
            ]
          }
        )
        .then(response => response.data)
        .then(jenkins => {
          commit("ADD_WIDGET", jenkins);
          Vue.$snotify.success(
            `Jenkins widget "${jenkins.title}" has been created!`
          );
        });
    },
    async addPlatform({ commit }, { slug, platform }) {
      await axios
        .post(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}/widgets`,
          {
            title: platform.title,
            titleUrl: platform.url,
            description: platform.description,
            type: "platform-status",
            sourceConfigs: [
              {
                id: "version",
                type: "urlSource",
                interval: platform.version.interval * 1000,
                configData: {
                  url: platform.version.url,
                  enableSslVerification: !platform.version.selected
                }
              },
              {
                id: "status",
                type: "urlSource",
                interval: platform.status.interval * 1000,
                configData: {
                  url: platform.status.url,
                  enableSslVerification: !platform.status.selected
                }
              }
            ]
          }
        )
        .then(response => response.data)
        .then(platform => {
          commit("ADD_WIDGET", platform);
          Vue.$snotify.success(
            `Platform widget "${platform.title}" has been created!`
          );
        });
    },
    async deleteWidget({ commit }, { slug, widgetId, title }) {
      await axios
        .delete(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}/widgets/${widgetId}`
        )
        .then(() => {
          commit("DELETE_WIDGET", widgetId);
          Vue.$snotify.error(`Widget "${title}" has been deleted!`);
        })
        .catch(error => {
          if (error.response.status === 404) {
            Vue.$snotify.error(`Widget "${title}" does not exist`);
          }
        });
    }
  },
  mutations: {
    SET_DASHBOARDS(state, dashboards) {
      state.dashboards = dashboards;
    },
    SET_DASHBOARD(state, dashboard) {
      state.dashboard.dashboard = dashboard;
    },
    ADD_DASHBOARD(state, dashboard) {
      state.dashboards.push(dashboard);
    },
    DELETE_DASHBOARD(state, slug) {
      state.dashboards.forEach((dashboard, i) => {
        if (dashboard.slug === slug) {
          state.dashboards.splice(i, 1);
        }
      });
    },
    SET_WIDGETS(state, widgets) {
      state.dashboard.widgets = widgets;
    },
    ADD_WIDGET(state, widget) {
      state.dashboard.widgets.push(widget);
    },
    DELETE_WIDGET(state, widgetId) {
      state.dashboard.widgets.forEach((widget, i) => {
        if (widget.widgetId === widgetId) {
          state.dashboard.widgets.splice(i, 1);
        }
      });
    }
  }
});
