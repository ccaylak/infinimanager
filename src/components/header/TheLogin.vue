<template>
  <b-container class="mt-5">
    <b-row align-v="center" align-h="center">
      <b-col md="7">
        <h4 class="text-center">Login</h4>
        <ValidationObserver v-slot="{ handleSubmit }">
          <b-form @submit.prevent="handleSubmit(onSubmit)">
            <b-form-group label="Email" label-for="email">
              <ValidationProvider
                name="Email"
                rules="required|email"
                v-slot="validationContext"
              >
                <b-form-input
                  id="email"
                  v-model="login.email"
                  type="email"
                  :state="getValidationState(validationContext)"
                  aria-describedby="email-required"
                ></b-form-input>
                <b-form-invalid-feedback id="email-required">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </ValidationProvider>
            </b-form-group>
            <b-form-group label="Password" label-for="password">
              <ValidationProvider
                name="Password"
                rules="required"
                v-slot="validationContext"
              >
                <b-form-input
                  id="password"
                  v-model="login.password"
                  type="password"
                  :state="getValidationState(validationContext)"
                  aria-describedby="password-required"
                ></b-form-input>
                <b-form-invalid-feedback id="password-required">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </ValidationProvider>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </ValidationObserver>
      </b-col>
    </b-row>
  </b-container>
</template>
template>

<script>
export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      alert(this.login.email);
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    }
  }
};
</script>
