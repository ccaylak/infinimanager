<template>
  <div>
    <divider-widget
      v-for="widget in widgets"
      :key="widget._id"
      :title="widget.title"
      :description="widget.description"
      :widget-id="widget._id"
    ></divider-widget>
    <jenkins-widget></jenkins-widget>
  </div>
</template>

<script>
import DividerWidget from "@/components/dashboard/edit/widget/DividerWidget";
import axios from "axios";
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
    axios
      .get(
        "http://localhost:8080//api/dashboards/" +
          this.$route.params.slug +
          "/widgets/all"
      )
      .then(response => {
        this.widgets = response.data._embedded.widgetConfigResourceList;
        console.log(this.widgets);
      });
  }
};
</script>
