import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue';
import Renting from '@/views/Renting.vue';
import Contact from '@/views/Contact.vue';
import Vehicle from '@/views/Vehicle.vue';
import Account from '@/views/Account.vue';
import Create from '@/views/Create.vue';

import AdminUsers from '@/views/Admin/Users/adminUsers.vue';
import AdminUpdate from '@/views/Admin/Users/usersUpdate.vue';

import Admin from '@/views/Admin/admin.vue';

import adminVehicles from "@/views/Admin/Vehicles/adminVehicles.vue";
import adminVehiclesUpdate from "@/views/Admin/Vehicles/vehiclesUpdate.vue"

import adminBooking from "@/views/Admin/Booking/adminBooking.vue";
import adminBookingUpdate from "@/views/Admin/Booking/bookingUpdate.vue"


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name:"home" ,component: Home},
        {path: '/renting', name:"renting" ,component: Renting},
        {path: '/vehicle/:id', name:"vehicle" ,component: Vehicle},
        {path: '/account', name:"account" ,component: Account},
        {path: '/contact', name:"contact" ,component: Contact},
        {path: '/create', name:"create" ,component: Create},

        //ROUTE ADMIN***************************************************************************************************
        {path: '/admin', name:"admin" ,component: Admin},
        //ROUTE ADMIN USERS*********************************************************************************************
        {path: '/adminUsers', name:"adminUsers" ,component: AdminUsers},
        {path: '/users/:id', name:"update", component :AdminUpdate},

        //ROUTE ADMIN VEHICLES******************************************************************************************
        {path: '/adminVehicles', name:"adminVehicles" ,component: adminVehicles},
        {path: '/vehicles/:id', name:"updateVehicle", component :adminVehiclesUpdate},

        //ROUTE ADMIN BOOKING*******************************************************************************************
        {path: '/adminBooking', name:"adminBooking" ,component: adminBooking},
        {path: '/booking/:id', name:"updateBooking", component :adminBookingUpdate},

    ]
});

export default router;
