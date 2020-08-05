<template>
  <div>
    <dashboard-list-item
      v-for="dashboard in dashboards"
      :key="dashboard.index"
      :dashboard="dashboard"
    />
  </div>
</template>

<script>
import DashboardListItem from "@/components/DashboardListItem";

export default {
  name: "TheDashboardList",
  components: {
    DashboardListItem
  },
  data() {
    return {
      dashboards: [
        {
          index: 1,
          name: "Dashboard name",
          description: "Dashboard description"
        },
        {
          index: 2,
          name: "Adesso-Kicker",
          description: "Tool to manage games"
        },
        {
          index: 3,
          name: "Projectboard",
          description: "Tool to manage projects"
        },
        {
          index: 4,
          name: "SEPL",
          description: "Tool to manage employees"
        }
      ],
      fields: ["name", "description", "Actions"]
    };
  }
};
</script>
