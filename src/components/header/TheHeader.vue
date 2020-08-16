<template>
  <div>
    <!-- Header title -->
    <b-navbar toggleable="md" fixed="top" class="navbar" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">InfiniManager</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Add dashboard button -->
        <b-navbar-nav>
          <AddDashboardModal />
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <!-- Logout button -->
          <b-nav-item @click="$router.push('../login')"
            >Login
            <b-icon-box-arrow-right></b-icon-box-arrow-right>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import AddDashboardModal from "@/components/header/AddNavItemDashboard";

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
