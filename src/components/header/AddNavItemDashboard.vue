<template>
  <div>
    <!-- Add dashboard modal button -->
    <b-nav-item v-b-modal.add-dashboard>Add dashboard</b-nav-item>
    <!-- Add dashboard modal window -->
    <b-modal id="add-dashboard" title="Add dashboard" centered hide-footer>
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Dashboard name input -->
          <b-form-group label="Name" label-for="dashboard-name">
            <ValidationProvider
              name="Name"
              rules="required"
              v-slot="validationContext"
            >
              <b-form-input
                id="dashboard-name"
                v-model="dashboard.name"
                type="text"
                :state="getValidationState(validationContext)"
                aria-describedby="required-name"
              ></b-form-input>
              <b-form-invalid-feedback id="required-name"
                >{{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
              <span></span>
            </ValidationProvider>
          </b-form-group>
          <!-- Dashboard slug input -->
          <b-form-group label="Slug" label-for="dashboard-slug">
            <ValidationProvider
              name="Slug"
              :rules="{ required: true, regex: /^[a-z0-9-_]+$/ }"
              v-slot="validationContext"
            >
              <b-form-input
                id="dashboard-slug"
                v-model="dashboard.slug"
                type="text"
                :state="getValidationState(validationContext)"
                aria-describedby="slug-required"
              ></b-form-input>
              <b-form-invalid-feedback id="slug-required"
                >{{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </ValidationProvider>
          </b-form-group>
          <!-- Dashboard description input -->
          <b-form-group label="Description" label-for="dashboard-description">
            <ValidationProvider name="Description">
              <b-form-input
                id="dashboard-description"
                v-model="dashboard.description"
                type="text"
              ></b-form-input>
            </ValidationProvider>
          </b-form-group>
          <!-- Dashboard submit button -->
          <b-button class="mt-3" block type="submit">Create dashboard</b-button>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddNavItemDashboard",
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
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return 0;
        }
      });
      axios
        .post(process.env.VUE_APP_BASE_URL + "/api/dashboards", {
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
      this.$nextTick(() => {
        this.$refs.form.reset();
        this.$bvModal.hide("modal-center");
        this.dashboard.name = this.dashboard.slug = this.dashboard.description =
          "";
      });
    }
  }
};
</script>
