import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tt from "../views/tt.vue";
import Default from "../views/Default.vue";
import test from "../views/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tt",
    name: "tt",
    component: Tt
  },
  {
    path: "/default",
    name: "default",
    component: Default
  },
  {
    path: "/test",
    name: "test",
    component: test
  }
];

const router = new VueRouter({
  routes
});

export default router;
