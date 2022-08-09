import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RandomSurvivor from "../views/RandomSurvivor.vue";
import RandomSurvivorPerks from "../views/RandomSurvivorPerks.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/survivor",
    name: "survivor",
    component: RandomSurvivor,
  },
  {
    path: "/survivor-perks",
    name: "survivor-perks",
    component: RandomSurvivorPerks,
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
