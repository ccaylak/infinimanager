<template>
  <div>
    <dashboard-list-item
      v-for="dashboard in dashboards"
      :key="dashboard.slug"
      :dashboard="dashboard"
    />
  </div>
</template>

<script>
import axios from "axios";
import DashboardListItem from "@/components/DashboardListItem";

export default {
  name: "TheDashboardList",
  components: {
    DashboardListItem
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/dashboards")
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
