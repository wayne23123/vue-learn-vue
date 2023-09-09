import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import VuePageLayout from "../views/VuePageLayout.vue";
import VuePageOne from "../views/vuepage/VuePageOne.vue";
import VuePageTwoLayout from "../views/vuepage/VuePageTwoLayout.vue";
import VuePageTwoOne from "../views/vuepage/VuePageTwoOne.vue";
import VuePageTwoTwo from "../views/vuepage/VuePageTwoTwo.vue";

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
                  component: VuePageTwoTwo,
                },
                {
                  path: "vue2",
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
    // 配置404找不到頁面
    {
      path: "/:pathMatch(.*)*",
      component: HomePage,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
