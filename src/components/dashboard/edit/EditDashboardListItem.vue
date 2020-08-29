<template>
  <b-container>
    <b-row>
      <b-col class="text-center border-bottom" align-self="center">
        <!-- Back to dashboard list button -->
        <b-icon-arrow-left-short
          class="clickable"
          @click="toRoot"
          font-scale="4"
        ></b-icon-arrow-left-short>
      </b-col>
      <b-container>
        <b-row class="p-4 border-bottom">
          <b-col>
            <!-- Dashboard name -->
            <div class="h1 font-weight-bolder">
              {{ dashboard.name }}
            </div>
            <!-- Dashboard description -->
            <div class="font-weight-lighter">
              {{ dashboard.description }}
            </div>
            <b-row class="pt-5">
              <b-col>
                <!-- Add widget divider button -->
                <add-button-divider-widget></add-button-divider-widget>
              </b-col>
              <b-col>
                <!-- Add jenkins widget button -->
                <add-button-jenkins-widget></add-button-jenkins-widget>
              </b-col>
              <b-col>
                <!-- Add platform version widget button -->
                <add-button-platform-version-widget></add-button-platform-version-widget>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <TheWidgetList class="pt-3" />
  </b-container>
</template>

<script>
import TheWidgetList from "@/components/dashboard/edit/widget/TheWidgetList";
import AddButtonDividerWidget from "@/components/dashboard/edit/AddButtonDividerWidget";
import AddButtonJenkinsWidget from "@/components/dashboard/edit/AddButtonJenkinsWidget";
import AddButtonPlatformVersionWidget from "@/components/dashboard/edit/AddButtonPlatformVersionWidget";

export default {
  name: "EditDashboardItem",
  components: {
    TheWidgetList,
    AddButtonPlatformVersionWidget,
    AddButtonJenkinsWidget,
    AddButtonDividerWidget
  },
  data() {
    return {
      dashboard: {
        name: null,
        description: null
      }
    };
  },
  mounted() {
    this.$http
      .get(
        `${process.env.VUE_APP_BASE_URL}/api/dashboards/${this.$route.params.slug}`
      )
      .then(response => {
        this.dashboard.name = response.data.name;
        this.dashboard.description = response.data.description;
      });
  },
  methods: {
    toRoot() {
      this.$router.push("../");
    }
  }
};
</script>
