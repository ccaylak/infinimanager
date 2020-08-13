<template>
  <div>
    <!-- Add widget modal button -->
    <b-button v-b-modal.add-widget>
      <span class="h4">Add widget</span>
    </b-button>
    <!-- Add widget modal window -->
    <b-modal id="add-widget" centered title="Add widget divider" hide-footer>
      <b-form @submit="onSubmit">
        <b-form-group label="Add to divider:" label-for="dashboard-select">
          <b-form-select
            id="dashboard-select"
            :options="dashboards"
            required
          ></b-form-select>
        </b-form-group>
        <!-- Widget name input -->
        <b-form-group label="Widget name" label-for="widget-name-input">
          <b-form-input
            id="widget-name-input"
            v-model="name"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Widget description input -->
        <b-form-group
          label="Widget description"
          label-for="widget-description-input"
        >
          <b-form-input
            id="widget-description-input"
            v-model="description"
            type="text"
          ></b-form-input>
        </b-form-group>
        <!-- Widget tag input -->
        <b-form-group label="Widget tag" label-for="widget-tag-input">
          <b-form-input
            id="widget-tag-input"
            v-model="tag"
            type="text"
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
      name: "",
      description: "",
      tag: "",
      dashboards: ["Dashboard", "Adesso", "Hello"]
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
