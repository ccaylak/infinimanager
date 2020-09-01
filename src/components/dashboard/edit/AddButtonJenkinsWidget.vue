<template>
  <div>
    <!-- Add jenkins widget modal button -->
    <b-button v-b-modal.add-jenkins>
      <span class="h4">Add jenkins widget</span>
    </b-button>
    <!-- Add jenkins widget modal window -->
    <b-modal id="add-jenkins" title="Add jenkins widget" centered hide-footer>
      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
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
                id="jenkins-title"
                placeholder="Title"
                type="text"
                v-model="jenkins.title"
                :state="getValidationState(validationContext)"
                aria-describedby="title-required"
              >
              </b-form-input>
              <b-form-invalid-feedback id="title-required">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-input-group>
          </ValidationProvider>
          <ValidationProvider
            name="Url"
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
                id="jenkins-url"
                placeholder="URL"
                type="text"
                v-model="jenkins.sourceConfigs.configData.url"
                :state="getValidationState(validationContext)"
                aria-describedby="url-required"
              >
              </b-form-input>
              <b-form-invalid-feedback id="url-required">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
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
              v-model="jenkins.sourceConfigs.interval"
              min="1"
              max="60"
              placeholder="Interval in seconds"
            >
            </b-form-spinbutton>
          </b-input-group>
          <ValidationProvider
            name="Username"
            rules="required"
            v-slot="validationContext"
          >
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-person-fill></b-icon-person-fill
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="jenkins-username"
                type="text"
                v-model="jenkins.sourceConfigs.configData.username"
                placeholder="Username"
                :state="getValidationState(validationContext)"
                aria-describedby="username-required"
              >
              </b-form-input>
              <b-form-invalid-feedback id="username-required">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-input-group>
          </ValidationProvider>
          <ValidationProvider
            name="Password"
            rules="required"
            v-slot="validationContext"
          >
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon-key-fill></b-icon-key-fill
                ></span>
              </b-input-group-prepend>
              <b-form-input
                id="jenkins-password"
                type="password"
                placeholder="Password"
                v-model="jenkins.sourceConfigs.configData.password"
                :state="getValidationState(validationContext)"
                aria-describedby="password-required"
              >
              </b-form-input>
              <b-form-invalid-feedback id="password-required">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-input-group>
          </ValidationProvider>
          <b-form-group class="text-center" label="SSL Verification?">
            <b-form-radio-group v-model="selected" name="some-radios">
              <b-form-radio value="yes">Yes</b-form-radio>
              <b-form-radio value="no">No</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-button class="mt-3" type="submit" block
            >Create jenkins widget
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddButtonJenkinsWidget",
  data() {
    return {
      selected: "no",
      jenkins: {
        title: "",
        sourceConfigs: {
          interval: null,
          configData: {
            url: "",
            username: "",
            password: ""
          }
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
            title: this.jenkins.title,
            type: "jenkins",
            sourceConfigs: [
              {
                id: "jenkins",
                type: "urlSource",
                interval: this.jenkins.sourceConfigs.interval * 1000,
                configData: {
                  url: this.jenkins.sourceConfigs.configData.url,
                  enableSslVerification: !this.selected,
                  username: this.jenkins.sourceConfigs.configData.username,
                  password: this.jenkins.sourceConfigs.configData.password
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
        this.$bvModal.hide("add-jenkins");
      });
    }
  }
};
</script>
