<template>
  <div>
    <div v-if="dashboards.length > 0 && !loading">
      <dashboard-item
        class="list-item mt-2 shadow-lg"
        v-for="dashboard in dashboards"
        :key="dashboard.slug"
        :dashboard="dashboard"
      />
    </div>
    <div
      v-else-if="dashboards.length === 0 && !loading"
      class="text-center mt-5"
    >
      <h1 class="font-weight-bolder">
        No dashboards available
      </h1>
    </div>
    <div v-else-if="loading" class="text-center mt-5">
      <b-spinner label="Loading..." variant="secondary"></b-spinner>
    </div>
  </div>
</template>

<script>
import DashboardItem from "@/components/dashboard/list/DashboardListItem";

export default {
  name: "TheDashboardList",
  components: {
    DashboardItem
  },
  created() {
    this.getDashboards();
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    dashboards() {
      return this.$store.state.dashboards;
    }
  },
  methods: {
    async getDashboards() {
      this.loading = true;
      await this.$store.dispatch("loadDashboards");
      this.loading = false;
    }
  }
};
</script>

<style>
.list-item {
  background: #0071b9;
  color: white;
}
</style>
