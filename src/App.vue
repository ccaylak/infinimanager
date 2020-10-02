<template>
  <div id="app">
    <TheHeader />
    <router-view class="headerOverlap footerOverlap"></router-view>
    <TheFooter />
    <vue-snotify></vue-snotify>
  </div>
</template>
<script>
import TheHeader from "@/components/header/TheHeader";
import TheFooter from "@/components/footer/TheFooter";
export default {
  components: { TheFooter, TheHeader }
};
</script>

<style>
.clickable {
  cursor: pointer;
}
.headerOverlap {
  padding-top: 56px;
}
.footerOverlap {
  padding-bottom: 56px;
}
.background {
  background: linear-gradient(to top, #f3f3f3, white) center center fixed
    no-repeat;
  background-size: cover;
}
</style>
