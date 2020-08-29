<template>
  <div>
    <!-- Add dashboard modal button -->
    <b-nav-item v-b-modal.add-dashboard>Add dashboard</b-nav-item>
    <!-- Add dashboard modal window -->
    <b-modal id="add-dashboard" title="Add dashboard" centered hide-footer>
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Dashboard name input -->
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
                placeholder="Dashboard title"
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
          <!-- Dashboard slug input -->
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
                placeholder="Dashboard slug"
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
          <!-- Dashboard description input -->
          <ValidationProvider name="Description">
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-info></b-icon-info
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="dashboard-description"
                placeholder="Optional dashboard description"
                v-model="dashboard.description"
                type="text"
              ></b-form-input>
            </b-input-group>
          </ValidationProvider>
          <!-- Dashboard submit button -->
          <b-button class="mt-3" block type="submit">Create dashboard</b-button>
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
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return 0;
        }
      });
      this.$http
        .post(`${process.env.VUE_APP_BASE_URL}/api/dashboards`, {
          name: this.dashboard.name,
          slug: this.dashboard.slug,
          description: this.dashboard.description
        })
        .then(response => {
          console.log(response);
        });
      this.$nextTick(() => {
        this.$refs.form.reset();
        this.$bvModal.hide("add-dashboard");
        this.dashboard.name = this.dashboard.slug = this.dashboard.description =
          "";
      });
    }
  }
};
</script>
