<template>
  <b-container>
    <b-row>
      <b-col class="text-center border-bottom" align-self="center">
        <!-- Back to dashboard list button -->
        <b-icon-arrow-left-short
          class="clickable"
          @click="toRoot"
          font-scale="4"
        ></b-icon-arrow-left-short>
      </b-col>
      <b-container>
        <b-row class="p-4 border-bottom">
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
                <add-button-divider-widget></add-button-divider-widget>
              </b-col>
              <b-col>
                <!-- Add widget button -->
                <add-button-widget></add-button-widget>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <TheWidgetList class="pt-3" />
  </b-container>
</template>

<script>
import AddButtonDividerWidget from "@/components/dashboard/edit/AddButtonDividerWidget";
import AddButtonWidget from "@/components/dashboard/edit/AddButtonWidget";
import TheWidgetList from "@/components/dashboard/edit/widget/TheWidgetList";

export default {
  name: "EditDashboardItem",
  components: { TheWidgetList, AddButtonDividerWidget, AddButtonWidget },
  data() {
    return {
      dashboard: {
        name: null,
        description: null
      }
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:8080/api/dashboards/" + this.$route.params.slug)
      .then(response => {
        this.dashboard.name = response.data.name;
        this.dashboard.description = response.data.description;
      });
  },
  methods: {
    toRoot() {
      this.$router.push("../");
    }
  }
};
</script>
