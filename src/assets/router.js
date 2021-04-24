import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Halls from './views/Halls.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import ForgetPassword from './views/ForgetPassword.vue'

const routes = [{
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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;