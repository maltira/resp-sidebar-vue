import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../page/HomePage.vue"
import AboutPage from "../page/AboutPage.vue"

const router = createRouter({
    routes: [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    }
    ],
    history: createWebHistory()
})

export default router;