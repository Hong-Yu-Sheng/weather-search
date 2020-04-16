import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Default from "../views/Default.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/default",
    name: "default",
    component: Default
  }

];

const router = new VueRouter({
  routes
});

export default router;
