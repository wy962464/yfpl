import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";

const staticRoute = [
    {
        path: "/",
        redirect: "/yfpl",
    },
    {
        path: "/yfpl",
        name: "yfpl",
        component: () => import("@/App.vue"),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: staticRoute,
});

export default router;