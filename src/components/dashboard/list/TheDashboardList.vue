<template>
  <div>
    <dashboard-item
      class="listItem"
      v-for="dashboard in dashboards"
      :key="dashboard.slug"
      :dashboard="dashboard"
    />
  </div>
</template>

<script>
import axios from "axios";
import DashboardItem from "@/components/dashboard/list/DashboardListItem";

export default {
  name: "TheDashboardList",
  components: {
    DashboardItem
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_BASE_URL + "/api/dashboards")
      .then(
        response =>
          (this.dashboards = response.data._embedded.dashboardResourceList)
      )
      .catch(error => console.log(error));
  },
  data() {
    return {
      dashboards: []
    };
  }
};
</script>

<style scoped>
.listItem {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
</style>
