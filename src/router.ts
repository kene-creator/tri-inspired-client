import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("./pages/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("./pages/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
