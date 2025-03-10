import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/index.vue"),
  },
  {
    path: "/user",
    component: () => import("../pages/user/index.vue"),
  },
  {
    path: "/admin",
    component: () => import("../pages/admin/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
