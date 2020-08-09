<template>
  <div>
    <b-icon-x font-scale="2" v-b-modal.delete></b-icon-x>
    <b-modal id="delete" hide-footer title="Delete divider widget">
      <div class="d-block text-center">
        <h3>Do you really want to delete?</h3>
      </div>
      <b-button class="mt-3" block>No</b-button>
      <b-button class="mt-3" block>Yes</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "DeleteDividerWidget"
};
</script>
