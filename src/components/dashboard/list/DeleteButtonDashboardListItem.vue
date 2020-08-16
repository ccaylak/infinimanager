<template>
  <div>
    <!-- Delete dashboard modal button -->
    <b-button @click="$bvModal.show(name)" class="m-2">
      <b-icon-trash-fill font-scale="1.5"></b-icon-trash-fill>
    </b-button>
    <!-- Delete dashboard modal windows -->
    <b-modal v-bind:id="name" hide-footer title="Delete dashboard">
      <!-- Delete dashboard modal content -->
      <div class="d-block text-center">
        <h3>Do you really want to delete {{ name }}?</h3>
      </div>
      <!-- Delete dashboard no button -->
      <b-button class="mt-3" @click="$bvModal.hide(name)" block>No</b-button>
      <!-- Delete dashboard yes button -->
      <b-button class="mt-3" @click="onDelete" block>Yes</b-button>
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
          this.$bvModal.hide(this.name);
        });
    }
  }
};
</script>
