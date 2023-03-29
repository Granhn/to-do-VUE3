import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    routes: [
        {
            path:'/',
            name:'Home',
            component: () => import('../Views/Home.vue')
        },
        {
            path:'/tareas', 
            name:'Tareas',
            component: () => import('../Views/Tareas.vue')
        },
        {
            path:'/tareas/eliminadas', 
            name:'Prueba2',
            component: () => import('../Views/TareasEliminadas.vue')
        }
    ]
  })
  
  export default router
  