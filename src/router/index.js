import Vue from "vue";
import VueRouter from "vue-router";
import TheDashboardList from "@/components/TheDashboardList";
import EditDashboardListItem from "@/components/EditDashboardListItem";

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: TheDashboardList },
  { path: "/dashboard/:slug", component: EditDashboardListItem }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
