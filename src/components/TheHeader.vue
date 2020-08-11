<template>
  <div>
    <!-- Header title -->
    <b-navbar class="navbar" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">InfiniManager</b-navbar-brand>

      <!-- Add dashboard button -->
      <b-navbar-nav>
        <AddDashboardModal />
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <!-- Logout button -->
        <b-nav-item href="#"
          >Logout
          <b-icon-box-arrow-right></b-icon-box-arrow-right>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import AddDashboardModal from "@/components/AddDashboardModal";

export default {
  components: {
    AddDashboardModal
  },
  name: "TheHeader"
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(to right, #00c6ff, #0072ff);
}
</style>
