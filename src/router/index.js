import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import VuePageLayout from "../views/VuePageLayout.vue";
import VuePageOne from "../views/vuepage/VuePageOne.vue";
import VuePageTwoLayout from "../views/vuepage/VuePageTwoLayout.vue";
import VuePageTwoOne from "../views/vuepage/VuePageTwoOne.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: HomePage,
        },
        {
          path: "about",
          component: AboutPage,
        },
        {
          path: "vue",
          component: VuePageLayout,
          children: [
            {
              path: "",
              component: VuePageTwoLayout,
              children: [
                {
                  path: "",
                  component: VuePageTwoOne,
                },
              ],
            },
            {
              path: "note",
              component: VuePageOne,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
