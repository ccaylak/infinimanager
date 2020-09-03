<template>
  <div>
    <!-- Add platform widget button -->
    <b-button variant="outline-light" v-b-modal:add-platform block>
      <span class="h4">Add platform widget</span>
    </b-button>
    <!-- Platform widget modal -->
    <b-modal id="add-platform" title="Add platform widget" centered hide-footer>
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Platform title -->
          <ValidationProvider
            name="Title"
            rules="required"
            v-slot="validationContext"
          >
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-tag-fill></b-icon-tag-fill
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="platform-title"
                placeholder="Title"
                type="text"
                v-model="platform.title"
                :state="getValidationState(validationContext)"
                aria-describedby="title-required"
              ></b-form-input>
              <b-form-invalid-feedback id="title-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
          <!-- Platform url -->
          <ValidationProvider
            name="Title url"
            rules="required"
            v-slot="validationContext"
          >
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-globe2></b-icon-globe2
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="platform-url"
                placeholder="Platform url"
                type="text"
                v-model="platform.titleUrl"
                :state="getValidationState(validationContext)"
                aria-describedby="url-required"
              ></b-form-input>
              <b-form-invalid-feedback id="url-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
          <!-- Platform description -->
          <ValidationProvider
            name="Description"
            rules="required"
            v-slot="validationContext"
          >
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-info></b-icon-info
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="platform-description"
                placeholder="Optional description"
                type="text"
                v-model="platform.description"
                :state="getValidationState(validationContext)"
                aria-describedby="description-required"
              ></b-form-input>
              <b-form-invalid-feedback id="description-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
          <!-- Version url -->
          <ValidationProvider
            name="Version url"
            rules="required"
            v-slot="validationContext"
          >
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-globe2></b-icon-globe2
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="platform-version-url"
                placeholder="Version url"
                type="text"
                v-model="platform.version.url"
                :state="getValidationState(validationContext)"
                aria-describedby="version-url-required"
              ></b-form-input>
              <b-form-invalid-feedback id="version-url-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
          <!-- Version interval spinbutton -->
          <b-input-group class="mt-3">
            <b-input-group-prepend>
              <span class="input-group-text"
                ><b-icon-clock-fill></b-icon-clock-fill
              ></span>
            </b-input-group-prepend>
            <b-form-spinbutton
              id="jenkins-interval"
              v-model="platform.version.interval"
              min="1"
              max="60"
              placeholder="Interval in seconds"
            >
            </b-form-spinbutton>
          </b-input-group>
          <!-- Version ssl verification radiobutton -->
          <b-form-group class="text-center" label="SSL Verification?">
            <b-form-radio-group
              v-model="platform.version.selected"
              name="version-radios"
            >
              <b-form-radio value="yes">Yes</b-form-radio>
              <b-form-radio value="no">No</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <!-- Status url -->
          <ValidationProvider
            name="Status url"
            rules="required"
            v-slot="validationContext"
          >
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-globe2></b-icon-globe2
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="platform-status-url"
                placeholder="Status url"
                type="text"
                v-model="platform.status.url"
                :state="getValidationState(validationContext)"
                aria-describedby="status-url-required"
              ></b-form-input>
              <b-form-invalid-feedback id="status-url-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
          <!-- Version interval spinbutton -->
          <b-input-group class="mt-3">
            <b-input-group-prepend>
              <span class="input-group-text"
                ><b-icon-clock-fill></b-icon-clock-fill
              ></span>
            </b-input-group-prepend>
            <b-form-spinbutton
              id="jenkins-interval"
              v-model="platform.status.interval"
              min="1"
              max="60"
              placeholder="Interval in seconds"
            >
            </b-form-spinbutton>
          </b-input-group>
          <!-- Version ssl verification -->
          <b-form-group class="text-center" label="SSL Verification?">
            <b-form-radio-group
              v-model="platform.status.selected"
              name="status-radios"
            >
              <b-form-radio value="yes">Yes</b-form-radio>
              <b-form-radio value="no">No</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <!-- Submit button -->
          <b-button class="mt-3" type="submit" block
            >Create platform widget
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddButtonPlatformWidget",
  data() {
    return {
      platform: {
        title: "",
        url: "",
        description: "",
        version: {
          url: "",
          interval: null,
          selected: "no"
        },
        status: {
          url: "",
          interval: null,
          selected: "no"
        }
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
        .post(
          `${process.env.VUE_APP_BASE_URL}/api/dashboards/${this.$route.params.slug}/widgets`,
          {
            title: this.platform.title,
            titleUrl: this.platform.url,
            description: this.platform.description,
            type: "platform-status",
            sourceConfigs: [
              {
                id: "version",
                type: "urlSource",
                interval: this.platform.version.interval * 1000,
                configData: {
                  url: this.platform.version.url,
                  enableSslVerification: !this.platform.version.selected
                }
              },
              {
                id: "status",
                type: "urlSource",
                interval: this.platform.status.interval * 1000,
                configData: {
                  url: this.platform.status.url,
                  enableSslVerification: !this.platform.status.selected
                }
              }
            ]
          }
        )
        .then(response => {
          console.log(response);
        });
      this.$nextTick(() => {
        this.$refs.form.reset();
        this.$bvModal.hide("add-platform");
      });
    }
  }
};
</script>
