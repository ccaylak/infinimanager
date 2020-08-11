<template>
  <div>
    <!-- Delete divider widget modal button -->
    <b-icon-trash font-scale="2" v-b-modal.delete></b-icon-trash>
    <b-modal id="delete" hide-footer title="Delete divider widget">
      <!-- Delete divider widget modal windows -->
      <div class="d-block text-center">
        <h3>Do you really want to delete?</h3>
      </div>
      <!-- Delete divider widget no button -->
      <b-button class="mt-3" block>No</b-button>
      <!-- Delete divider widget yes button -->
      <b-button class="mt-3" block>Yes</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "DeleteDividerWidget"
};
</script>
