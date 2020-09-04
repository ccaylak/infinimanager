<template>
  <b-card
    border-variant="secondary"
    v-bind:header="title"
    header-border-variant="secondary"
    align="center"
  >
    <b-row>
      <b-col>
        <!-- Jenkins widget title -->
        <b-card-title>{{ url }}</b-card-title>
      </b-col>
      <b-col lg="3">
        <!-- Delete jenkins widget button -->
        <delete-button-widget
          :title="title"
          :widget-id="widgetId"
          :dashboard-id="dashboardId"
        >
        </delete-button-widget>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import DeleteButtonWidget from "@/components/dashboard/edit/DeleteButtonWidget";
export default {
  name: "JenkinsWidget",
  components: { DeleteButtonWidget },
  props: {
    title: String,
    url: String,
    widgetId: String,
    dashboardId: String
  }
};
</script>
