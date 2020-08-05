<template>
  <div id="app">
    <TheHeader />
    <TheDashboardList />
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader";
import TheDashboardList from "@/components/TheDashboardList";
export default {
  components: { TheDashboardList, TheHeader }
};
</script>
