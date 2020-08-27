<template>
  <div>
    <!-- Add divider widget modal button -->
    <b-button v-b-modal.add-divider>
      <span class="h4">Add widget divider</span>
    </b-button>
    <!-- Add divider widget modal window -->
    <b-modal id="add-divider" title="Add divider" centered hide-footer>
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Divider name input -->
          <b-form-group label="Title" label-for="divider-title">
            <ValidationProvider
              name="Name"
              rules="required"
              v-slot="validationContext"
            >
              <b-form-input
                id="divider-title"
                type="text"
                v-model="divider.title"
                :state="getValidationState(validationContext)"
                aria-describedby="title-required"
              ></b-form-input>
              <b-form-invalid-feedback id="title-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </ValidationProvider>
            <!-- Divider widget description input -->
          </b-form-group>
          <b-form-group
            label="Optional description"
            label-for="divider-description"
          >
            <b-form-input
              id="divider-description"
              type="text"
              v-model="divider.description"
            ></b-form-input>
          </b-form-group>
          <!-- Divider widget submit button -->
          <b-button class="mt-3" type="submit" block
            >Create widget divider
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddButtonDividerWidget",
  data() {
    return {
      divider: {
        title: "",
        description: "",
        type: "divider"
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
      this.$http
        .post(
          process.env.VUE_APP_BASE_URL +
            "/dashboards/" +
            this.$route.params.slug +
            "/widgets",
          {
            title: this.divider.title,
            description: this.divider.description,
            type: this.divider.type
          }
        )
        .then(function(response) {
          console.log(response.data);
        });
      this.divider.title = this.divider.description = "";
      this.$nextTick(() => {
        this.$refs.form.reset();
        this.$bvModal.hide("add-divider-widget");
      });
    }
  }
};
</script>
