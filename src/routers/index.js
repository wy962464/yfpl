import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";
import APP from '@/App.vue'
const staticRoute = [
    {
        path: "/",
        redirect: "/yfpl",
    },
    {
        path: "/yfpl",
        name: "yfpl",
        component: APP,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: staticRoute,
});

export default router;