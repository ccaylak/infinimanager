<template>
  <div>
    <div v-for="(uwidget, index) in widgets" :key="uwidget._id">
      <div v-if="uwidget.type === 'divider'">
        <divider-widget
          :title="uwidget.title"
          :description="uwidget.description"
          :widget-id="uwidget.widgetId"
          :dashboard-id="uwidget.dashboardId"
        ></divider-widget>
      </div>

      <div v-if="uwidget.type === 'divider'">
        <b-card-group columns>
          <div
            v-for="widget in splitWidgets(widgets.slice(index + 1))"
            :key="widget._id"
          >
            <div v-if="!(widget.type === 'divider')">
              <jenkins-widget
                v-if="widget.type === 'jenkins'"
                :title="widget.title"
                :url="widget.sourceConfigs[0].configData.url"
                :widget-id="widget.widgetId"
                :dashboard-id="uwidget.dashboardId"
              ></jenkins-widget>
              <platform-widget
                v-if="widget.type === 'platform-status'"
                :title="widget.title"
                :description="widget.description"
                :widget-id="widget.widgetId"
                :dashboard-id="uwidget.dashboardId"
              ></platform-widget>
            </div>
          </div>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import DividerWidget from "@/components/dashboard/edit/widget/DividerWidget";
import JenkinsWidget from "@/components/dashboard/edit/widget/JenkinsWidget";
import PlatformWidget from "@/components/dashboard/edit/widget/PlatformWidget";
export default {
  name: "TheWidgetList",
  components: { PlatformWidget, JenkinsWidget, DividerWidget },
  methods: {
    splitWidgets(list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].type === "divider") {
          return list.slice(0, i);
        }
        if (i === list.length - 1) {
          return list;
        }
      }
    }
  },
  created() {
    this.$store.dispatch("loadWidgets", this.$route.params.slug);
  },
  destroyed() {
    this.$store.state.dashboard.widgets = [];
  },
  computed: {
    widgets() {
      return this.$store.state.dashboard.widgets;
    }
  }
};
</script>
