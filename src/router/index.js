import { createRouter,createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProjDetailPage from "../pages/ProjDetailPage.vue";

const router = createRouter({
    history:createWebHistory(),
    linkActiveClass:'active',
    linkExactActiveClass:'active',
    routes:[
        {
            path:'/',
            name:'home',
            component:HomePage,
        },
        {
            path:'/contacts',
            name:'contacts',
            component:ContactPage,
        },
        {
            path:'/projs/:id',
            name:'proj-detail',
            component:ProjDetailPage,
        },
    ]
});

export {router};
