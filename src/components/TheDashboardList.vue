<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col></b-col>
        <b-col lg="9">
          <!--
          <h1 class="font-weight-bolder">
            No dashboards available
            <p>Go on create some</p>
          </h1>
          -->

          <b-table hover :items="dashboards" :fields="fields">
            <template v-slot:cell(actions)>
              <b-button variant="outline-dark"
                ><b-icon-pencil-square></b-icon-pencil-square
              ></b-button>
              <b-button variant="outline-dark"
                ><b-icon-trash-fill></b-icon-trash-fill
              ></b-button>
            </template>
          </b-table>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BIconTrashFill, BIconPencilSquare } from "bootstrap-vue";
export default {
  name: "TheDashboardList",
  components: {
    BIconTrashFill,
    BIconPencilSquare
  },
  data() {
    return {
      dashboards: [
        { name: "Dashboard name", description: "Dashboard description" },
        { name: "Adesso-Kicker", description: "Tool to manage games" },
        { name: "Projectboard", description: "Tool to manage projects" },
        { name: "SEPL", description: "Tool to manage employees" }
      ],
      fields: ["name", "description", "Actions"]
    };
  }
};
</script>
