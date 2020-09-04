<template>
  <div v-if="dashboards.length > 0">
    <dashboard-item
      class="list-item mt-2 shadow-lg"
      v-for="dashboard in dashboards"
      :key="dashboard.slug"
      :dashboard="dashboard"
    />
  </div>
  <div v-else>
    <h1 class="font-weight-bolder text-center">
      No dashboards available
    </h1>
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
    this.$store.dispatch("loadDashboards");
  },
  computed: {
    dashboards() {
      return this.$store.state.dashboards;
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
