<template>
  <b-button class="m-2" @click="editDashboard">
    <b-icon-pencil-square font-scale="1.5"></b-icon-pencil-square>
  </b-button>
</template>

<script>
export default {
  name: "EditDashboardListeItemButton",
  methods: {
    editDashboard() {
      this.$router.push("dashboard/" + this.slug);
    }
  },
  props: {
    slug: String
  }
};
</script>
