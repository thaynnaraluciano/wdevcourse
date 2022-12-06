import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';
import Videos from '@/pages/Videos';
import Sobre from '@/pages/Sobre'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/videos',
        component: Videos
    },
    {
        path: '/sobre',
        component: Sobre
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;