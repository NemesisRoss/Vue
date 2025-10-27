import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Contact from '../views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        // La on a une route pour notre page / (l'accueil)
        // {
        //     path: '/',
        //     alias: '/home',
        //     name: 'home',
        //     component: Home
        // },
        // En mode Lazy Loading de component (on garde en cache le component)
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/contact.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/TextInt',
            name: 'TextInt',
            component: () => import('../views/lesson/TextInterpolation.vue')
        },
        {
            path: '/ExoInt',
            name: 'ExoInt',
            component: () => import('../views/exo/ExoInterpolation.vue')
        }
    ]
})

export default router;