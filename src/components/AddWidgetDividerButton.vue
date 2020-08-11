<template>
  <div>
    <!-- Add divider widget modal button -->
    <b-button v-b-modal.add-divider-widget>
      <span class="h4">Add widget divider</span>
    </b-button>
    <!-- Add divider widget modal window -->
    <b-modal
      id="add-divider-widget"
      centered
      title="Add widget divider"
      hide-footer
    >
      <b-form @submit="onSubmit">
        <!-- Divider widget name input -->
        <b-form-group
          label="Widget divider name"
          label-for="divider-widget-name-input"
        >
          <b-form-input
            id="divider-widget-name-input"
            v-model="name"
            type="text"
            required
          ></b-form-input>
          <!-- Divider widget description input -->
        </b-form-group>
        <b-form-group
          label="Divider widget description"
          label-for="divider-widget-description-input"
        >
          <b-form-input
            id="divider-widget-name-input"
            v-model="description"
            type="text"
          ></b-form-input>
        </b-form-group>
        <!-- Divider widget submit button -->
        <b-button class="mt-3" block type="submit"
          >Create widget divider
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddWidgetDividerButton",
  data() {
    return {
      name: "",
      description: ""
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      JSON.stringify(this.name, this.description);
    }
  }
};
</script>
