import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Projets from "@/views/Projets";
import Stats from "@/views/Stats";

import VueGtag from 'vue-gtag'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/github',
    beforeEnter() {window.open('https://github.com/StrawberryCorps', "_blank")}
  },
  {
    path: '/status',
    beforeEnter() {window.open('https://status.eclixal.fr', "_blank")}
  },
  {
    path: '/discord',
    beforeEnter() {window.open('https://discord.gg/R9rYZmsUXT', '_blank')}
  },
  {
    path: '/nos-projets',
    name: 'NosProjets',
    component: Projets
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Vue.use(VueGtag, {
  config: { id: 'G-9WEHXDWM3J' },
  bootstrap: true
}, router)

export default router
