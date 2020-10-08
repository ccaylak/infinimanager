<template>
  <b-container>
    <b-row>
      <b-col class="text-center pt-4 pb-4">
        <!-- Back to dashboard list button -->
        <b-icon-arrow-left-circle-fill
          class="clickable"
          variant="secondary"
          font-scale="2.5"
          @click="toRoot"
        ></b-icon-arrow-left-circle-fill>
      </b-col>
      <b-container>
        <b-row v-if="!loading" class="list-item shadow-lg">
          <b-col v-if="dashboard">
            <!-- Dashboard name -->
            <div class="h1 font-weight-bolder">
              {{ dashboard.name }}
            </div>
            <!-- Dashboard description -->
            <div class="font-weight-lighter">
              {{ dashboard.description }}
            </div>
            <b-row class="pt-3 pb-3">
              <b-col>
                <!-- Add Divider widget button -->
                <add-button-divider-widget></add-button-divider-widget>
              </b-col>
              <b-col>
                <!-- Add jenkins widget button -->
                <add-button-jenkins-widget></add-button-jenkins-widget>
              </b-col>
              <b-col>
                <!-- Add platform widget button -->
                <add-button-platform-widget></add-button-platform-widget>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row v-else class="justify-content-center">
          <b-spinner
            class="mt-5"
            label="Loading..."
            variant="primary"
          ></b-spinner>
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
import AddButtonPlatformWidget from "@/components/dashboard/edit/AddButtonPlatformWidget";

export default {
  name: "EditDashboardItem",
  components: {
    TheWidgetList,
    AddButtonPlatformWidget,
    AddButtonJenkinsWidget,
    AddButtonDividerWidget
  },
  mounted() {
    this.getDashboards();
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    dashboard() {
      return this.$store.state.dashboard.dashboard;
    }
  },
  methods: {
    toRoot() {
      this.$router.push("../");
    },
    async getDashboards() {
      this.loading = true;
      await this.$store.dispatch("loadDashboard", this.$route.params.slug);
      this.loading = false;
    }
  }
};
</script>
