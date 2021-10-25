import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: "Home",
        component: App
    },
    {
        path: '/pokemon/:id',
        name: "PokemonDetails",
        component: () => import('./Views/PokemonDetails.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;