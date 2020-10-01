<template>
  <div class="text-center">
    <h1 class="display-1">
      404
    </h1>
    <h2>
      Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
      existed in the first place?
    </h2>
    <h4>Let's go <router-link to="/">home</router-link> and try from there.</h4>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>
