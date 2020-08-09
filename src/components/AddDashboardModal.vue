<template>
  <div>
    <b-nav-item v-b-modal.modal-center>Add dashboard</b-nav-item>

    <b-modal id="modal-center" centered title="Add dashboard" hide-footer>
      <b-form @submit="onSubmit">
        <b-form-group label="Name" label-for="dashboard-name-input">
          <b-form-input
            id="dashboard-name-input"
            v-model="dashboard.name"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Slug" label-for="dashboard-name-input">
          <b-form-input
            id="dashboard-name-input"
            v-model="dashboard.slug"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
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
      event.preventDefault();
    }
  }
};
</script>
