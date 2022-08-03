import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

export type RouterMeta = {
    icon: string
}

export type RouterPage = {

    path: string,
    name: string,
    redirect?: string,
    component: () => Promise<any>,
    meta?: RouterMeta

}

const routes:RouterPage[] = [
    {
        path: "/",
        name: "",
        redirect: "/Login",
        component: undefined
    },
    {
        path: "/Login",
        name: "Login",
        component: () => import("/@/views/Login/index.vue")
    },
    {
        path: "/Index",
        name: "Index",
        component: () => import("/@/views/Index/index.vue")
    },
    {
        path: "/Setup",
        name: "Setup",
        component: () => import("/@/views/Setup/index.vue")
    },
    {
        path: "/TsCom",
        name: "TsCom",
        component: () => import("/@/views/TsCom/index.vue")
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
