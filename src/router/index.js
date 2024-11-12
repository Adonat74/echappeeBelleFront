import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue';
import Renting from '@/views/Renting.vue';
import Contact from '@/views/Contact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name:"home" ,component: Home},
        {path: '/renting', name:"renting" ,component: Renting},
        {path: '/contact', name:"contact" ,component: Contact},
    ]
});

export default router;
