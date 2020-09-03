<template>
  <b-button class="m-2" variant="outline-light" @click="editDashboard">
    <b-icon-pencil-square font-scale="1.5"></b-icon-pencil-square>
  </b-button>
</template>

<script>
export default {
  name: "EditButtonDashboardListItem",
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
