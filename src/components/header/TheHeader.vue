<template>
  <div>
    <!-- Header title -->
    <b-navbar class="navbar" type="light" fixed="top" toggleable="md">
      <b-navbar-brand class="mb-0 clickable" tag="h1" @click="toHome"
        >InfiniManager</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Add dashboard button -->
        <b-navbar-nav>
          <AddDashboardModal />
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <!-- Logout button -->
          <b-nav-item @click="toLogin"
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
  name: "TheHeader",
  methods: {
    toLogin() {
      this.$router.push("../login");
    },
    toHome() {
      this.$router.push("./");
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #e6e6e6;
}
</style>
