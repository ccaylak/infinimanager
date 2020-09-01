<template>
  <div>
    <b-card-group columns>
      <div v-for="widget in widgets" :key="widget._id">
        <div v-if="widget.type === 'divider'">
          <divider-widget
            :title="widget.title"
            :description="widget.description"
            :id="widget.widgetId"
          ></divider-widget>
        </div>
        <div v-if="widget.type !== 'divider'">
          <jenkins-widget
            v-if="widget.type === 'jenkins'"
            :title="widget.title"
            :url="widget.sourceConfigs[0].configData.url"
          ></jenkins-widget>
          <platformversion-widget
            v-if="widget.type === 'platform-status'"
            :title="widget.title"
            :description="widget.description"
          ></platformversion-widget>
        </div>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import DividerWidget from "@/components/dashboard/edit/widget/DividerWidget";
import JenkinsWidget from "@/components/dashboard/edit/widget/JenkinsWidget";
import PlatformversionWidget from "@/components/dashboard/edit/widget/PlatformversionWidget";
export default {
  name: "TheWidgetList",
  components: { PlatformversionWidget, JenkinsWidget, DividerWidget },
  data() {
    return {
      widgets: []
    };
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
