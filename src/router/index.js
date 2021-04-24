import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "../views/ViewHome.vue";
import ViewProjects from "../views/ViewProjects.vue";
import ViewServices from "../views/ViewServices.vue";
import ViewAbout from "../views/ViewAbout.vue";

const routes = [
  {
    path: "/",
    name: "ViewHome",
    component: ViewHome,
  },
  {
    path: "/projects",
    name: "ViewProjects",
    component: ViewProjects,
  },
  {
    path: "/services",
    name: "ViewServices",
    component: ViewServices,
  },
  {
    path: "/about",
    name: "ViewAbout",
    component: ViewAbout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
