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
        <b-form @submit.prevent="handleSubmit">
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
                placeholder="Platform version title"
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
                  placeholder="Platform version url"
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
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"
                ><b-icon-info></b-icon-info
                ></span>
              </b-input-group-prepend>
              <b-form-input
                  id="platformversion-description"
                  placeholder="Platform version description"
                  type="text"
                  v-model="platformversion.title"
                  :state="getValidationState(validationContext)"
                  aria-describedby="description-required"
              ></b-form-input>
              <b-form-invalid-feedback id="description-required">
                {{ validationContext.errors[0] }}</b-form-invalid-feedback
              >
            </b-input-group>
          </ValidationProvider>
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
        description: ""
      }
    };
  }
};
</script>
