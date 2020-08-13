import Vue from "vue";
import VueRouter from "vue-router";
import TheDashboardList from "@/components/dashboard/list/TheDashboardList";
import EditDashboardItem from "@/components/dashboard/edit/EditDashboardListItem";

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: TheDashboardList },
  { path: "/dashboard/:slug", component: EditDashboardItem }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
