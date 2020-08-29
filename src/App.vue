<template>
  <div id="app">
    <TheHeader />
    <router-view class="headerOverlap footerOverlap"></router-view>
    <TheFooter />
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
</style>
