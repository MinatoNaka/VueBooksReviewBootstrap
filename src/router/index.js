import Vue from "vue";
import VueRouter from "vue-router";
import BookSearch from "../views/BookSearch.vue";
import BookForm from "../views/BookForm.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: BookSearch,
  },
  {
    path: "/form",
    name: "form",
    component: BookForm,
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
