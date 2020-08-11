<template>
  <div>
    <!-- Add dashboard modal button -->
    <b-nav-item v-b-modal.modal-center>Add dashboard</b-nav-item>
    <!-- Add dashboard modal window -->
    <b-modal id="modal-center" centered title="Add dashboard" hide-footer>
      <b-form @submit="onSubmit">
        <!-- Dashboard name input -->
        <b-form-group label="Name" label-for="dashboard-name-input">
          <b-form-input
            id="dashboard-name-input"
            v-model="dashboard.name"
            type="text"
          ></b-form-input>
        </b-form-group>
        <!-- Dashboard slug input -->
        <b-form-group label="Slug" label-for="dashboard-name-input">
          <b-form-input
            id="dashboard-name-input"
            v-model="dashboard.slug"
            type="text"
          ></b-form-input>
        </b-form-group>
        <!-- Dashboard description input -->
        <b-form-group
          label="Description"
          label-for="dashboard-description-input"
        >
          <b-form-input
            id="dashboard-description-input"
            v-model="dashboard.description"
            type="text"
          ></b-form-input>
        </b-form-group>
        <!-- Dashboard submit button -->
        <b-button class="mt-3" block type="submit">Create dashboard</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddDashboardModal",
  data() {
    return {
      dashboard: {
        name: "",
        slug: "",
        description: ""
      }
    };
  },
  methods: {
    onSubmit(event) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("Bitte erst Daten angeben");
      } else {
        axios
          .post("http://localhost:8080/api/dashboards", {
            name: this.dashboard.name,
            slug: this.dashboard.slug,
            description: this.dashboard.description
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      event.preventDefault();
    }
  }
};
</script>
