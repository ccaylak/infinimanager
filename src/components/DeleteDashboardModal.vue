<template>
  <div>
    <b-button v-b-modal.delete class="m-2">
      <b-icon-trash-fill font-scale="1.5"></b-icon-trash-fill>
    </b-button>
    <b-modal id="delete" hide-footer title="Delete dashboard">
      <div class="d-block text-center">
        <h3>Do you really want to delete {{ name }}?</h3>
      </div>
      <b-button class="mt-3" block>No</b-button>

      <b-button class="mt-3" block>Yes</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "DeleteDashboardModal",
  props: {
    name: String
  }
};
</script>
