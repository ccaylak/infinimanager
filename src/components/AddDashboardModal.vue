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
            v-model="$v.dashboard.name.$model"
            type="text"
          ></b-form-input>
        </b-form-group>
        <!-- Dashboard slug input -->
        <b-form-group label="Slug" label-for="dashboard-name-input">
          <b-form-input
            id="dashboard-name-input"
            v-model="$v.dashboard.slug.$model"
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
            v-model="$v.dashboard.description.$model"
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
import { required } from "vuelidate/lib/validators";

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
  validations: {
    dashboard: {
      name: {
        required
      },
      description: {
        required
      },
      slug: {
        required
      }
    }
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
