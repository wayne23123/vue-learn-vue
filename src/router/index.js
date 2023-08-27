import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Layout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/HomePage.vue"),
        },
        {
          path: "about",
          component: () => import("../views/AboutPage.vue"),
        },
        {
          path: "vue",
          component: () => import("../views/VuePageLayout.vue"),
          children: [
            {
              path: "",
              component: () => import("../views/vuepage/vuePageOne.vue"),
            },
            {
              path: "note",
              component: () => import("../views/vuepage/vuePageTwo.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
