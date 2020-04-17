import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tt from "../views/tt.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },{
    path: "/tt",
    name: "tt",
    component: Tt
  }

];

const router = new VueRouter({
  routes
});

export default router;
