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
    loadDashboards({ commit }) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/dashboards`)
        .then(response => {
          commit(
            "SET_DASHBOARDS",
            response.data._embedded.dashboardResourceList
          );
        });
    },
    loadDashboard({ commit }, slug) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}`)
        .then(response => {
          commit("SET_DASHBOARD", response.data);
        });
    },
    addDashboard({ commit }, dashboard) {
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/api/dashboards`, {
          name: dashboard.name,
          slug: dashboard.slug,
          description: dashboard.description
        })
        .then(response => {
          commit("ADD_DASHBOARD", response.data);
        });
    },
    deleteDashboard({ commit }, slug) {
      axios
        .delete(`${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}`)
        .then(() => {
          commit("DELETE_DASHBOARD", slug);
        });
    },
    loadWidgets({ commit }, slug) {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}/widgets/all`
        )
        .then(response => {
          commit(
            "SET_WIDGETS",
            response.data._embedded.widgetConfigResourceList
          );
        });
    },
    addDivider({ commit }, { slug, divider }) {
      axios
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
        });
    },
    addJenkins({ commit }, { slug, jenkins }) {
      axios
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
        });
    },
    addPlatform({ commit }, { slug, platform }) {
      axios
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
        });
    },
    deleteWidget({ commit }, { slug, widgetId }) {
      axios
        .delete(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${slug}/widgets/${widgetId}`
        )
        .then(() => {
          commit("DELETE_WIDGET", widgetId);
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
