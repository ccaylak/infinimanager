<template>
  <div>
    <!-- Add dashboard button -->
    <b-nav-item v-b-modal.add-dashboard>Add dashboard</b-nav-item>
    <!-- Dashboard modal -->
    <b-modal id="add-dashboard" title="Add dashboard" centered hide-footer>
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Dashboard name -->
          <ValidationProvider
            name="Name"
            rules="required"
            v-slot="validationContext"
            ><b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-tag-fill></b-icon-tag-fill
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="dashboard-name"
                placeholder="Title"
                v-model="dashboard.name"
                type="text"
                :state="getValidationState(validationContext)"
                aria-describedby="required-name"
              ></b-form-input>
              <b-form-invalid-feedback id="required-name"
                >{{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-input-group>
          </ValidationProvider>
          <!-- Dashboard slug -->
          <ValidationProvider
            name="Slug"
            :rules="{ required: true, regex: /^[a-z0-9-_]+$/ }"
            v-slot="validationContext"
          >
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-flag-fill></b-icon-flag-fill
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="dashboard-slug"
                placeholder="Slug"
                v-model="dashboard.slug"
                type="text"
                :state="getValidationState(validationContext)"
                aria-describedby="slug-required"
              ></b-form-input>
              <b-form-invalid-feedback id="slug-required"
                >{{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-input-group>
          </ValidationProvider>
          <!-- Dashboard description -->
          <ValidationProvider name="Description">
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-info></b-icon-info
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="dashboard-description"
                placeholder="Optional description"
                v-model="dashboard.description"
                type="text"
              ></b-form-input>
            </b-input-group>
          </ValidationProvider>
          <!-- Submit button -->
          <b-button class="mt-3" block type="submit">
            <span v-if="!loading">Create dashboard</span>
            <b-spinner
              v-if="loading"
              class="justify-content-center"
              label="Loading.."
              variant="light"
            ></b-spinner>
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddNavItemDashboard",
  data() {
    return {
      dashboard: {
        name: "",
        slug: "",
        description: ""
      },
      loading: false
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return 0;
        }
      });
      this.loading = true;
      await this.$store.dispatch("addDashboard", this.dashboard);
      this.loading = false;
      this.$nextTick(() => {
        this.$refs.form.reset();
        this.$bvModal.hide("add-dashboard");
        this.clearInput(this.dashboard);
      });
    }
  }
};
</script>
