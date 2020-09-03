<template>
  <div>
    <!-- Delete dashboard modal button -->
    <b-button class="m-2" variant="outline-light" @click="$bvModal.show(slug)">
      <b-icon-trash-fill font-scale="1.5"></b-icon-trash-fill>
    </b-button>
    <!-- Delete dashboard modal windows -->
    <b-modal
      :id="slug"
      title="Delete dashboard"
      header-bg-variant="danger"
      header-text-variant="light"
      centered
      hide-footer
    >
      <!-- Delete dashboard modal content -->
      <div class="d-block text-center">
        Do you really want to delete dashboard: {{ name }}?
      </div>
      <b-row>
        <b-col
          ><!-- Delete dashboard yes button -->
          <b-button class="mt-3" variant="success" @click="onDelete" block
            ><b-icon-check></b-icon-check
          ></b-button>
        </b-col>
        <b-col>
          <!-- Delete dashboard no button -->
          <b-button
            class="mt-3"
            variant="danger"
            @click="$bvModal.hide(slug)"
            block
            ><b-icon-x></b-icon-x
          ></b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "DeleteButtonDashboardListItem",
  props: {
    name: String,
    slug: String
  },
  methods: {
    onDelete() {
      this.$http
        .delete(`${process.env.VUE_APP_BASE_URL}/api/dashboards/${this.slug}`)
        .then(() => {
          this.$bvModal.hide(this.slug);
        });
    }
  }
};
</script>
