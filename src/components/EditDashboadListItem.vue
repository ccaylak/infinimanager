<template>
  <b-container fluid>
    <b-row>
      <b-col align-self="center" class="text-center">
        <b-icon-arrow-left-short font-scale="4"></b-icon-arrow-left-short>
      </b-col>
      <b-col lg="9">
        <h1 class="font-weight-bolder">
          {{ this.name }} - {{ this.description }}
        </h1>
        <b-row>
          <b-col style="background-color: grey">Add widget divider</b-col>
          <b-col style="background-color: grey">Add widget</b-col>
        </b-row>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconArrowLeftShort } from "bootstrap-vue";

export default {
  name: "EditDashboadListItem",
  components: {
    BIconArrowLeftShort
  },
  data() {
    return {
      name: "Dashboard name",
      description: "Dashboard description"
    };
  }
};
</script>
