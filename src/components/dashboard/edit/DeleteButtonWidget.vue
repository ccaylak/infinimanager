<template>
  <div>
    <!-- Delete widget button -->
    <b-button
      variant="outline-danger"
      size="sm"
      @click="$bvModal.show(widgetId)"
      block
    >
      <b-icon-trash font-scale="2"></b-icon-trash>
    </b-button>
    <b-modal
      header-bg-variant="danger"
      header-text-variant="light"
      :id="widgetId"
      title="Delete divider widget"
      centered
      hide-footer
    >
      <!-- Delete widget modal -->
      <div class="d-block text-center">
        Do you really want to Widget: {{ title }}?
      </div>
      <b-row>
        <b-col>
          <!-- Delete widget accept button -->
          <b-button class="mt-3" variant="success" @click="onDelete" block
            ><b-icon-check></b-icon-check
          ></b-button>
        </b-col>
        <b-col>
          <!-- Delete widget decline button -->
          <b-button
            class="mt-3"
            variant="danger"
            @click="$bvModal.hide(widgetId)"
            block
            ><b-icon-x></b-icon-x>
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "DeleteButtonWidget",
  props: {
    title: String,
    widgetId: String,
    dashboardId: String
  },
  methods: {
    onDelete() {
      this.$store.dispatch("deleteWidget", {
        slug: this.$route.params.slug,
        dashboardId: this.dashboardId,
        widgetId: this.widgetId
      });
      this.$nextTick(() => {
        this.$bvModal.hide(this.widgetId);
      });
    }
  }
};
</script>
