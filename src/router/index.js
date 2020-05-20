import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tt from "../views/tt.vue";
import Tmp from "../views/tmp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  
  {
    path: "/tmp",
    name: "tmp",
    component: Tmp
  }
];

const router = new VueRouter({
  routes
});

export default router;
