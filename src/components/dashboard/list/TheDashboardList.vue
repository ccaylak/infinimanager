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
  mounted() {
    this.getDashboards();
  },
  data() {
    return {
      dashboards: []
    };
  },
  methods: {
    getDashboards() {
      this.$http
        .get(`${process.env.VUE_APP_BASE_URL}/api/dashboards`)
        .then(response => {
          this.dashboards = response.data._embedded.dashboardResourceList;
        });
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
