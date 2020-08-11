<template>
  <b-container fluid>
    <b-row>
      <b-col align-self="center" class="text-center">
        <!-- Back to dashboard list button -->
        <b-icon-arrow-left-short
          class="clickable"
          @click="toHome"
          font-scale="4"
        ></b-icon-arrow-left-short>
      </b-col>
      <b-container style="background-color: lightgrey">
        <b-row class="p-4">
          <b-col>
            <!-- Dashboard name -->
            <div class="h1 font-weight-bolder">
              {{ dashboard.name }}
            </div>
            <!-- Dashboard description -->
            <div class="font-weight-lighter">
              {{ dashboard.description }}
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
import axios from "axios";

export default {
  name: "EditDashboardListItem",
  components: { DividerWidget, AddWidgetButton, AddWidgetDividerButton },
  data() {
    return {
      dashboard: {
        name: null,
        description: null
      }
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/dashboards/" + this.$route.params.slug)
      .then(response => {
        this.dashboard.name = response.data.name;
        this.dashboard.description = response.data.description;
      });
  },
  methods: {
    toHome() {
      this.$router.push("../home");
    }
  }
};
</script>
