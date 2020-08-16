<template>
  <div>
    <!-- Add widget modal button -->
    <b-button v-b-modal.add-widget>
      <span class="h4">Add widget</span>
    </b-button>
    <!-- Add widget modal window -->
    <b-modal id="add-widget" centered title="Add widget divider" hide-footer>
      <b-form @submit.prevent="onSubmit">
        <!-- Widget name input -->
        <b-form-group label="Widget name" label-for="widget-name-input">
          <b-form-input
            id="widget-name-input"
            v-model="widget.title"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Widget submit button -->
        <b-button class="mt-3" block type="submit"
          >Create widget divider
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddButtonWidget",
  data() {
    return {
      widget: {
        title: "",
        type: "jenkins"
      },
      status: []
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>
