<template>
  <div>
    <div v-for="widget in widgets" :key="widget._id">
      <div v-if="widget.type === 'divider'">
        <divider-widget
          :title="widget.title"
          :description="widget.description"
        ></divider-widget>
      </div>
      <div v-if="widget.type === 'jenkins'">
        <jenkins-widget
          :title="widget.title"
          :url="widget.sourceConfigs[0].configData.url"
        ></jenkins-widget>
      </div>
    </div>
  </div>
</template>

<script>
import DividerWidget from "@/components/dashboard/edit/widget/DividerWidget";
import JenkinsWidget from "@/components/dashboard/edit/widget/JenkinsWidget";
export default {
  name: "TheWidgetList",
  components: { JenkinsWidget, DividerWidget },
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
        console.log(this.widgets);
      });
  }
};
</script>
