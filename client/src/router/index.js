import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/movies/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/movies/AboutView.vue"),
  },
  {
    path: "/recommended",
    name: "recommended",
    component: () =>
      import("../views/movies/RecommendedView.vue"),
  },
  {
    path: "/community",
    name: "community",
    component: () =>
      import("../views/CommunityView.vue"),
  },
  {
    path: "/myprofile",
    name: "myprofile",
    component: () =>
      import("../views/accounts/MyProfileView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/accounts/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("../views/accounts/SignupView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
