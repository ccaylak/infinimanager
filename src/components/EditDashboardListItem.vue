<template>
  <b-container fluid>
    <b-row>
      <b-col align-self="center" class="text-center">
        <b-icon-arrow-left-short font-scale="4"></b-icon-arrow-left-short>
      </b-col>
      <b-container style="background-color: lightgrey">
        <b-row class="p-4">
          <b-col>
            <div class="h1 font-weight-bolder">
              Dashboard name
            </div>
            <div class="font-weight-lighter">
              Dashboard description
            </div>
            <b-row class="pt-5">
              <b-col>
                <add-widget-divider-button></add-widget-divider-button>
              </b-col>
              <b-col>
                <add-widget-button></add-widget-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import AddWidgetDividerButton from "@/components/AddWidgetDividerButton";
import AddWidgetButton from "@/components/AddWidgetButton";

export default {
  name: "EditDashboardListItem",
  components: { AddWidgetButton, AddWidgetDividerButton },
  data() {
    return {
      name: "Dashboard name",
      description: "Dashboard description"
    };
  }
};
</script>
