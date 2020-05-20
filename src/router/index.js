import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tmp from "../views/tmp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  
  {
    path: "/tmp",
    name: "Tmp",
    component: Tmp
  }
];

const router = new VueRouter({
  routes
});

export default router;
