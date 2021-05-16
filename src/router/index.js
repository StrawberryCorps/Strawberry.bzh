import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Projets from "@/views/Projets";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/github',
    beforeEnter() {location.href = 'https://github.com/StrawberryCorps'}
  },
  {
    path: '/status',
    beforeEnter() {location.href = 'https://status.strawberrycorps.tech'}
  },
  {
    path: '/nos-projets',
    name: 'NosProjets',
    component: Projets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
