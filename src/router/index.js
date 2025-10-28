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
        },
        {
            path: '/inlineTemp',
            name: 'inlineTemp',
            component: () => import('../views/lesson/inline-templating.vue')
        },
        {
            path: '/attrBind',
            name: 'attrBind',
            component: () => import('../views/lesson/attribute-binding.vue')
        },
        {
            path: '/exoBind',
            name: 'exoBind',
            component: () => import('../views/exo/ExoBinding.vue')
        },
        {
            path: '/evntBind',
            name: 'eventBind',
            component: () => import('../views/lesson/lesson-event-binding.vue')
        },
        {
            path: '/exoEvntBind',
            name: 'exoEventBind',
            component: () => import('../views/exo/ExoEventBinding.vue')
        },
        {
            path: '/twoWayBind',
            name: 'twoWayBind',
            component: () => import('../views/lesson/lesson-two-way-binding.vue')
        },
        {
            path: '/compProp',
            name: 'compProp',
            component: () => import('../views/lesson/lesson-computed-properties.vue')
        },
        {
            path: '/watchers',
            name: 'watchers',
            component: () => import('../views/lesson/lesson-watchers.vue')
        },
        {
            path: '/dynStyling',
            name: 'dynStyling',
            component: () => import('../views/lesson/lesson-dynamic-styling.vue')
        },
        {
            path: '/condiRender',
            name: 'condiRender',
            component: () => import('../views/lesson/lesson-conditional-rendering.vue')
        },
        {
            path: '/listRender',
            name: 'listRender',
            component: () => import('../views/lesson/lesson-list-rendering.vue')
        },
        {
            path: '/exoWatch',
            name: 'exoWatch',
            component: () => import('../views/exo/ExoWatchers.vue')
        },
        {
            path: '/exoDynStyl',
            name: 'exoDynStyl',
            component: () => import('../views/exo/ExoDynamicStyling.vue')
        }
    ]
})

export default router;