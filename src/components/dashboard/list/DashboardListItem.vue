<template>
  <b-container>
    <b-row>
      <b-container>
        <b-row>
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
          <b-col sm="1.5">
            <!-- Edit dashboard button -->
            <edit-dashboard-liste-item-button
              :slug="dashboard.slug"
            ></edit-dashboard-liste-item-button>
            <!-- Delete dashboard button -->
            <delete-dashboard-modal
              :name="dashboard.name"
              :slug="dashboard.slug"
            ></delete-dashboard-modal>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import DeleteDashboardModal from "@/components/dashboard/list/DeleteButtonDashboardListItem";
import EditDashboardListeItemButton from "@/components/dashboard/list/EditButtonDashboardListItem";

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
