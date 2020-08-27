<template>
  <div>
    <!-- Delete dashboard modal button -->
    <b-button class="m-2" @click="$bvModal.show(slug)">
      <b-icon-trash-fill font-scale="1.5"></b-icon-trash-fill>
    </b-button>
    <!-- Delete dashboard modal windows -->
    <b-modal :id="slug" title="Delete dashboard" hide-footer>
      <!-- Delete dashboard modal content -->
      <div class="d-block text-center">
        <h3>Do you really want to delete {{ name }}?</h3>
      </div>
      <!-- Delete dashboard yes button -->
      <b-button class="mt-3" @click="onDelete" block>Yes</b-button>
      <!-- Delete dashboard no button -->
      <b-button class="mt-3" @click="$bvModal.hide(slug)" block>No</b-button>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DeleteButtonDashboardListItem",
  props: {
    name: String,
    slug: String
  },
  methods: {
    onDelete() {
      axios
        .delete(process.env.VUE_APP_BASE_URL + "/api/dashboards/" + this.slug)
        .then(() => {
          this.$bvModal.hide(this.slug);
        });
    }
  }
};
</script>
