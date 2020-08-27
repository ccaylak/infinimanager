<template>
  <div v-if="dashboards.length > 0">
    <dashboard-item
      class="list-item"
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
import axios from "axios";
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
      axios
        .get(process.env.VUE_APP_BASE_URL + "/api/dashboards")
        .then(response => {
          this.dashboards = response.data._embedded.dashboardResourceList;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.list-item {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
</style>
