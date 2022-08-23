import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SurvivorView from "@/views/SurvivorView.vue";
import SurvivorPerksView from "@/views/SurvivorPerksView.vue";
import KillerView from "@/views/KillerView.vue";
import KillerPerksView from "@/views/KillerPerksView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/survivor",
    name: "survivor",
    component: SurvivorView,
  },
  {
    path: "/survivor-perks",
    name: "survivor-perks",
    component: SurvivorPerksView,
  },
  {
    path: "/killer",
    name: "killer",
    component: KillerView,
  },
  {
    path: "/killer-perks",
    name: "killer-perks",
    component: KillerPerksView,
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicyView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
