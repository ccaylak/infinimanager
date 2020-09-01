<template>
  <div>
    <!-- Delete divider widget modal button -->
    <b-button @click="$bvModal.show(title)">
      <b-icon-trash font-scale="2"></b-icon-trash>
    </b-button>
    <b-modal :id="title" title="Delete divider widget" hide-footer>
      <!-- Delete divider widget modal windows -->
      <div class="d-block text-center">
        <h3>Do you really want to {{ title }}?</h3>
      </div>
      <!-- Delete divider widget yes button -->
      <b-button class="mt-3" @click="onDelete" block>Yes</b-button>
      <!-- Delete divider widget no button -->
      <b-button class="mt-3" @click="$bvModal.hide(title)" block>No</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "DeleteButtonDividerWidget",
  props: {
    title: String,
    id: String
  },
  methods: {
    onDelete() {
      this.$http
        .delete(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${this.$route.params.slug}/widgets/${this.id}`
        )
        .then(() => {
          this.$bvModal.hide(this.title);
        });
    }
  }
};
</script>
