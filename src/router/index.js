import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue';
import Renting from '@/views/Renting.vue';
import Contact from '@/views/Contact.vue';
import Car from '@/views/Car.vue';
import Account from '@/views/Account.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name:"home" ,component: Home},
        {path: '/renting', name:"renting" ,component: Renting},
        {path: '/car/:id', name:"car" ,component: Car},
        {path: '/account', name:"account" ,component: Account},
        {path: '/contact', name:"contact" ,component: Contact},
    ]
});

export default router;
