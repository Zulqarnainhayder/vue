import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Halls from './views/Halls.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import ForgetPassword from './views/ForgetPassword.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      header1: true,
    },
  },
  {
    path: "/halls",
    name: "halls",
    component: Halls,
    meta: {
      header1: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      header2: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      header2: true,
    },
  },
  {
    path: "/forgetpassword",
    name: "ForgetPassword",
    component: ForgetPassword,
    meta: {
      header2: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
