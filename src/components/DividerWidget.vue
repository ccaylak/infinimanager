<template>
  <b-container fluid>
    <b-row>
      <b-col></b-col>
      <b-container>
        <b-row class="p-4">
          <b-col>
            <div class="h2">
              <u>
                Divider Widget
                <span class="font-weight-lighter">- Description</span>
              </u>
            </div>
          </b-col>
          <b-col sm="0.5">
            <delete-divider-widget></delete-divider-widget>
          </b-col>
        </b-row>
      </b-container>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import DeleteDividerWidget from "@/components/DeleteDividerWidget";

export default {
  name: "DividerWidget",
  components: { DeleteDividerWidget }
};
</script>
