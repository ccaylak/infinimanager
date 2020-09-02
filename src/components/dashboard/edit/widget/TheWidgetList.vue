<template>
  <div>
    <div v-for="(uwidget, index) in widgets" :key="uwidget._id">
      <template v-if="uwidget.type === 'divider'">
        <divider-widget
          :title="uwidget.title"
          :description="uwidget.description"
          :id="uwidget.widgetId"
        ></divider-widget>
      </template>

      <template v-if="!(uwidget.type === 'divider')">
        <b-card-group columns>
          <div
            v-for="widget in splitWidgets(widgets, index)"
            :key="widget._id"
          >
            <div v-if="!(widget.type === 'divider')">
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
      </template>
    </div>
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
  methods: {
    splitWidgets(list, index) {
      for (let i = 0; i < list.length; i++) {
        console.log("Length: " + list.length);
        console.log("Type: " + list[i].type);
        if (list[i].type === "divider") {
          return list.slice(index, i);
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
