<template>
  <b-container fluid>
    <b-row>
      <b-col></b-col>
      <b-container>
        <b-row class="p-4">
          <b-col>
            <div class="h4">
              <u>
                <!-- Divider widget name -->
                {{ title }}
                <!-- Divider widget description -->
                <span class="font-weight-lighter">- {{ description }}</span>
              </u>
            </div>
          </b-col>
          <b-col sm="0.5">
            <delete-button-divider-widget
              :title="title"
              :widget-id="widgetId"
            ></delete-button-divider-widget>
          </b-col>
        </b-row>
      </b-container>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import DeleteButtonDividerWidget from "@/components/dashboard/edit/DeleteButtonDividerWidget";

export default {
  name: "DividerWidget",
  components: { DeleteButtonDividerWidget },
  props: {
    title: String,
    description: String,
    widgetId: String
  }
};
</script>
