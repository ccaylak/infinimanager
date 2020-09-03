<template>
  <div>
    <div v-for="(uwidget, index) in widgets" :key="uwidget._id">
      <template v-if="uwidget.type === 'divider'">
        <divider-widget
          :title="uwidget.title"
          :description="uwidget.description"
          :widget-id="uwidget.widgetId"
        ></divider-widget>
      </template>

      <template v-if="uwidget.type === 'divider'">
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
              ></jenkins-widget>
              <platformversion-widget
                v-if="widget.type === 'platform-status'"
                :title="widget.title"
                :description="widget.description"
                :widget-id="widget.widgetId"
              ></platformversion-widget>
            </div>
          </div>
        </b-card-group>
      </template>
    </div>
  </div>
</template>

<script>
import DividerWidget from "@/components/dashboard/edit/widget/DividerWidget";
import JenkinsWidget from "@/components/dashboard/edit/widget/JenkinsWidget";
import PlatformversionWidget from "@/components/dashboard/edit/widget/PlatformWidget";
export default {
  name: "TheWidgetList",
  components: { PlatformversionWidget, JenkinsWidget, DividerWidget },
  data() {
    return {
      widgets: []
    };
  },
  methods: {
    // @Copyright2020 Frederik Schlemmer
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
  mounted() {
    this.$http
      .get(
        `${process.env.VUE_APP_BASE_URL}/api/dashboards/${this.$route.params.slug}/widgets/all`
      )
      .then(response => {
        this.widgets = response.data._embedded.widgetConfigResourceList;
      });
  }
};
</script>
