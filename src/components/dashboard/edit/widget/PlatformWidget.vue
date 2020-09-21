<template>
  <b-card
    border-variant="secondary"
    :header="title.toUpperCase()"
    header-border-variant="secondary"
    align="center"
  >
    <b-row>
      <b-col>
        <!-- Platform widget Description -->
        <b-card-title>{{ description }}</b-card-title>
      </b-col>
      <b-col>
        <!-- Delete platform widget button -->
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
  name: "PlatformWidget",
  components: { DeleteButtonWidget },
  props: {
    title: String,
    description: String,
    widgetId: String,
    dashboardId: String
  }
};
</script>
