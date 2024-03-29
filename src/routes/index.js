import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "/src/components/LandingPage.vue";
import AuthenticatePage from "/src/components/AuthenticatePage.vue";
import NotFound from "/src/components/NotFound.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },

    {
      path: "/authenticate",
      name: "authenticate-page",
      component: AuthenticatePage,
    },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});



export default router;
