<template>
  <div>
    <b-navbar variant="primary" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">InfiniManager</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item v-b-modal.modal-center>Add dashboard</b-nav-item>

        <b-modal id="modal-center" centered title="Add dashboard" hide-footer>
          <b-form @submit="onSubmit">
            <b-form-group
              label="Dashboard name"
              label-for="dashboard-name-input"
            >
              <b-form-input
                id="dashboard-name-input"
                v-model="form.name"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Dashboard description"
              label-for="dashboard-description-input"
            >
              <b-form-input
                id="dashboard-description-input"
                v-model="form.description"
                type="text"
              ></b-form-input>
            </b-form-group>
            <b-button class="mt-3" block type="submit"
              >Create dashboard</b-button
            >
          </b-form>
        </b-modal>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"
          >Logout
          <b-icon-box-arrow-right></b-icon-box-arrow-right>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { BIconBoxArrowRight } from "bootstrap-vue";

export default {
  components: {
    BIconBoxArrowRight
  },
  name: "TheHeader",
  data() {
    return {
      form: {
        name: null,
        description: null
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
