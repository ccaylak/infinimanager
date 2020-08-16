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
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Divider name input -->
          <b-form-group label="Title" label-for="dividerName">
            <ValidationProvider
              name="Name"
              rules="required"
              v-slot="validationContext"
            >
              <b-form-input
                id="dividerName"
                v-model="divider.title"
                type="text"
                :state="getValidationState(validationContext)"
                aria-describedby="dividerName"
              ></b-form-input>
              <b-form-invalid-feedback id="dividerName">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </ValidationProvider>
            <!-- Divider widget description input -->
          </b-form-group>
          <b-form-group
            label="Optional description"
            label-for="divider-widget-description-input"
          >
            <b-form-input
              id="divider-widget-name-input"
              v-model="divider.description"
              type="text"
            ></b-form-input>
          </b-form-group>
          <!-- Divider widget submit button -->
          <b-button class="mt-3" block type="submit"
            >Create widget divider
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
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
      axios
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
