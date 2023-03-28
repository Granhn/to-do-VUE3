import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    routes: [
        {
            path:'/', 
            name:'Home',
            component: () => import('../Components/Prueba.vue')
        },
        {
            path:'/2', 
            name:'Prueba2',
            component: () => import('../Components/Prueba2.vue')
        }
    ]
  })
  
  export default router
  