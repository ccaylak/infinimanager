<template>
  <b-container fluid>
    <b-row>
      <b-col align-self="center" class="text-center">
        <!-- Back to dashboard list button -->
        <b-icon-arrow-left-short
          @click="toHome"
          font-scale="4"
        ></b-icon-arrow-left-short>
      </b-col>
      <b-container style="background-color: lightgrey">
        <b-row class="p-4">
          <b-col>
            <!-- Dashboard name -->
            <div class="h1 font-weight-bolder">
              Dashboard name
            </div>
            <!-- Dashboard description -->
            <div class="font-weight-lighter">
              Dashboard description
            </div>
            <b-row class="pt-5">
              <b-col>
                <!-- Add widget divider button -->
                <add-widget-divider-button></add-widget-divider-button>
              </b-col>
              <b-col>
                <!-- Add widget button -->
                <add-widget-button></add-widget-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-col></b-col>
    </b-row>
    <divider-widget></divider-widget>
  </b-container>
</template>

<script>
import AddWidgetDividerButton from "@/components/AddWidgetDividerButton";
import AddWidgetButton from "@/components/AddWidgetButton";
import DividerWidget from "@/components/DividerWidget";

export default {
  name: "EditDashboardListItem",
  components: { DividerWidget, AddWidgetButton, AddWidgetDividerButton },
  data() {
    return {
      dashboard: ""
    };
  },
  methods: {
    toHome() {
      this.$router.push("../home");
    }
  }
};
</script>
