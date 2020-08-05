<template>
  <div>
    <b-nav-item v-b-modal.modal-center>Add dashboard</b-nav-item>

    <b-modal id="modal-center" centered title="Add dashboard" hide-footer>
      <b-form @submit="onSubmit">
        <b-form-group label="Dashboard name" label-for="dashboard-name-input">
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
        <b-button class="mt-3" block type="submit">Create dashboard</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddDashboardModal",
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

<style scoped></style>
