import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home.vue"
import Exercici1 from "@/views/exercici1.vue"
import Exercici2 from "@/views/exercici2.vue"
import Exercici3 from "@/views/exercici3.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/exercici1',
      component: Exercici1,

      children:[
        {
          path: "ProducteId",
          name: "ProducteDetail",
          component: () => import("@/components/ProductDetail.vue"),
          props: true,
        },
      ],
    },
    {
      path: '/exercici2',
      component: Exercici2,
    },
    {
      path: '/exercici3',
      component: Exercici3,
    },
  ],
})

export default router
