<template>
  <div id="app">
    <TheHeader />
    <EditDashboardListItem />
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader";
import EditDashboardListItem from "@/components/EditDashboardListItem";
export default {
  components: { EditDashboardListItem, TheHeader }
};
</script>
