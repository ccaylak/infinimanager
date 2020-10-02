import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dashboards: [],
    dashboard: null,
    widgets: []
  },
  actions: {
    async loadDashboards({ commit }) {
      await axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/dashboards`)
        .then(response => {
          commit(
            "SET_DASHBOARDS",
            response.data._embedded.dashboardResourceList
          );
        })
        .catch(() => {
          console.log("No dashboards available");
        });
    },
    async loadDashboard({ commit }, slug) {
      await axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}`)
        .then(response => {
          commit("SET_DASHBOARD", response.data);
        })
        .then(() => new Promise(resolve => setTimeout(resolve, 2000)))
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
        .then(response => {
          commit("ADD_DASHBOARD", response.data);
          Vue.$snotify.success(
            `Dashboard "${response.data.name}" has been created!`
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
        .then(response => {
          commit(
            "SET_WIDGETS",
            response.data._embedded.widgetConfigResourceList
          );
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
        .then(response => {
          commit("ADD_WIDGET", response.data);
          Vue.$snotify.success(
            `Divider widget "${response.data.title}" has been created!`
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
        .then(response => {
          commit("ADD_WIDGET", response.data);
          Vue.$snotify.success(
            `Jenkins widget "${response.data.title}" has been created!`
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
        .then(response => {
          commit("ADD_WIDGET", response.data);
          Vue.$snotify.success(
            `Platform widget "${response.data.title}" has been created!`
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
      state.dashboard = dashboard;
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
      state.widgets = widgets;
    },
    ADD_WIDGET(state, widget) {
      state.widgets.push(widget);
    },
    DELETE_WIDGET(state, widgetId) {
      state.widgets.forEach((widget, i) => {
        if (widget.widgetId === widgetId) {
          state.widgets.splice(i, 1);
        }
      });
    }
  }
});
