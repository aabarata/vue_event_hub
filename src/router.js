import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: { name: "home" }
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
