<template>
  <b-container fluid>
    <b-row>
      <b-col></b-col>
      <!--
      <h1 class="font-weight-bolder">
        No dashboards available
        <p>Go on create some</p>
      </h1>
      -->
      <b-container>
        <b-row class="p-3">
          <b-col>
            <!-- Dashboard name -->
            <div class="h1 font-weight-bolder">
              {{ dashboard.name }}
            </div>
            <!-- Dashboard description -->
            <div class="font-weight-lighter">
              {{ dashboard.description }}
            </div>
          </b-col>
          <b-col sm="1">
            <!-- Edit dashboard button -->
            <edit-dashboard-liste-item-button
              :slug="dashboard.slug"
            ></edit-dashboard-liste-item-button>
            <!-- Delete dashboard button -->
            <delete-dashboard-modal
              :name="dashboard.name"
            ></delete-dashboard-modal>
          </b-col>
        </b-row>
      </b-container>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import DeleteDashboardModal from "@/components/DeleteDashboardModal";
import EditDashboardListeItemButton from "@/components/EditDashboardListeItemButton";

export default {
  name: "DashboardListItem",
  components: {
    EditDashboardListeItemButton,
    DeleteDashboardModal
  },
  props: {
    dashboard: {
      name: String,
      description: String,
      slug: String
    }
  }
};
</script>
