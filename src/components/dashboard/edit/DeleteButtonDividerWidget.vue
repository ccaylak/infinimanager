<template>
  <div>
    <!-- Delete divider widget modal button -->
    <b-button @click="$bvModal.show(title)">
      <b-icon-trash font-scale="2"></b-icon-trash>
    </b-button>
    <b-modal v-bind:id="title" hide-footer title="Delete divider widget">
      <!-- Delete divider widget modal windows -->
      <div class="d-block text-center">
        <h3>Do you really want to {{ title }}?</h3>
      </div>
      <!-- Delete divider widget yes button -->
      <b-button class="mt-3" block @click="onClick">Yes</b-button>
      <!-- Delete divider widget no button -->
      <b-button class="mt-3" block @click="$bvModal.hide(title)">No</b-button>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteButtonDividerWidget",
  props: {
    title: String,
    widgetId: String
  },
  data() {
    return {
      deleteURL: String
    };
  },
  mounted() {
    axios
      .get(
        process.env.VUE_APP_BASE_URL +
          "/api/dashboards/" +
          this.$route.params.slug +
          "/widgets"
      )
      .then(response => console.log(response));
  },
  methods: {
    onClick() {}
  }
};
</script>
