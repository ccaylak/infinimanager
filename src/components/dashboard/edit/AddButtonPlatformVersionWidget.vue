<template>
  <div>
    <!-- Add platform version widget button -->
    <b-button v-b-modal:add-platformversion>
      <span class="h4">Add platform version widget</span>
    </b-button>
    <!-- Add platform version widget modal windows -->
    <b-modal
      id="add-platformversion"
      title="Add platform version widget"
      centered
      hide-footer
    >
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Platform version title -->
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
                id="platformversion-title"
                placeholder="Title"
                type="text"
                v-model="platformversion.title"
                :state="getValidationState(validationContext)"
                aria-describedby="title-required"
              ></b-form-input>
              <b-form-invalid-feedback id="title-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
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
                id="platformversion-titleurl"
                placeholder="Platform url"
                type="text"
                v-model="platformversion.titleUrl"
                :state="getValidationState(validationContext)"
                aria-describedby="titleUrl-required"
              ></b-form-input>
              <b-form-invalid-feedback id="titleUrl-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
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
                id="platformversion-description"
                placeholder="Optional description"
                type="text"
                v-model="platformversion.description"
                :state="getValidationState(validationContext)"
                aria-describedby="description-required"
              ></b-form-input>
              <b-form-invalid-feedback id="description-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
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
                id="platformversion-version-url"
                placeholder="Version url"
                type="text"
                v-model="platformversion.version.url"
                :state="getValidationState(validationContext)"
                aria-describedby="version-url-required"
              ></b-form-input>
              <b-form-invalid-feedback id="version-url-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
          <b-input-group class="mt-3">
            <b-input-group-prepend>
              <span class="input-group-text"
                ><b-icon-clock-fill></b-icon-clock-fill
              ></span>
            </b-input-group-prepend>
            <b-form-spinbutton
              id="jenkins-interval"
              v-model="platformversion.version.interval"
              min="1"
              max="60"
              placeholder="Interval in seconds"
            >
            </b-form-spinbutton>
          </b-input-group>
          <b-form-group class="text-center" label="SSL Verification?">
            <b-form-radio-group
              v-model="platformversion.version.selected"
              name="version-radios"
            >
              <b-form-radio value="yes">Yes</b-form-radio>
              <b-form-radio value="no">No</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
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
                id="platformversion-status-url"
                placeholder="Status url"
                type="text"
                v-model="platformversion.status.url"
                :state="getValidationState(validationContext)"
                aria-describedby="status-url-required"
              ></b-form-input>
              <b-form-invalid-feedback id="status-url-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
          <b-input-group class="mt-3">
            <b-input-group-prepend>
              <span class="input-group-text"
                ><b-icon-clock-fill></b-icon-clock-fill
              ></span>
            </b-input-group-prepend>
            <b-form-spinbutton
              id="jenkins-interval"
              v-model="platformversion.status.interval"
              min="1"
              max="60"
              placeholder="Interval in seconds"
            >
            </b-form-spinbutton>
          </b-input-group>
          <b-form-group class="text-center" label="SSL Verification?">
            <b-form-radio-group
              v-model="platformversion.status.selected"
              name="status-radios"
            >
              <b-form-radio value="yes">Yes</b-form-radio>
              <b-form-radio value="no">No</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-button class="mt-3" type="submit" block
          >Create platform version widget
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddButtonPlatformVersionWidget",
  data() {
    return {
      platformversion: {
        title: "",
        titleUrl: "",
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
            title: this.platformversion.title,
            titleUrl: this.platformversion.titleUrl,
            description: this.platformversion.description,
            type: "platform-status",
            sourceConfigs: [
              {
                id: "version",
                type: "urlSource",
                interval: this.platformversion.version.interval * 1000,
                configData: {
                  url: this.platformversion.version.url,
                  enableSslVerification: !this.platformversion.version.selected
                }
              },
              {
                id: "status",
                type: "urlSource",
                interval: this.platformversion.status.interval * 1000,
                configData: {
                  url: this.platformversion.status.url,
                  enableSslVerification: !this.platformversion.status.selected
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
        this.$bvModal.hide("add-platformversion");
      });
    }
  }
};
</script>
