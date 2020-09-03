<template>
  <b-navbar class="footer" type="dark" fixed="bottom">
    <b-navbar-nav class="mx-auto">
      <b-nav-item target="_blank" :href="github"
        >© InfiniManager - GitHub</b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      github: "https://github.com/ccaylak/infinimanager"
    };
  }
};
</script>

<style scoped>
.footer {
  background: #8c8c8c;
}
</style>
