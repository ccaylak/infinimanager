<template>
  <div id="app">
    <TheHeader />
    <router-view
      style="background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
"
    ></router-view>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: { TheHeader }
};
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>
