<template>
  <b-container>
    <b-row class="p-2 border-bottom mb-2">
      <b-col>
        <div class="h4">
          <u>
            <!-- Divider widget title -->
            {{ title }}
            <!-- Divider widget description -->
            <span v-if="description" class="font-weight-lighter"
              >- {{ description }}</span
            >
          </u>
        </div>
      </b-col>
      <!-- Delete divider widget button-->
      <b-col sm="0.5">
        <delete-button-widget
          :title="title"
          :id="widgetId"
        ></delete-button-widget>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DeleteButtonWidget from "@/components/dashboard/edit/DeleteButtonWidget";

export default {
  name: "DividerWidget",
  components: { DeleteButtonWidget },
  props: {
    title: String,
    description: String,
    widgetId: String
  }
};
</script>
