<template>
  <b-card
    border-variant="secondary"
    v-bind:header="title"
    header-border-variant="secondary"
    align="center"
  >
    <b-row>
      <b-col>
        <!-- Title -->
        <b-card-title>Title</b-card-title>
      </b-col>
      <b-col lg="3">
        <!-- Delete button -->
        <delete-button-widget :title="title" :id="widgetId">
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
    widgetId: String
  }
};
</script>
