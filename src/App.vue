<template>
  <v-app>
    <v-app-bar color="primary" app flat>
      <v-container class="py-0 fill-height">
        <v-toolbar-title class="text-uppercase">StrawberryCorps</v-toolbar-title>
        <v-spacer></v-spacer>
         <v-btn
              v-for="link in links"
              :key="link.name"
              :text="link.name !== 'Github'"
              :rounded="link.name === 'Github'"
              :color="link.name === 'Github' ? 'red':''"
              :to="link.url"
              class="ml-2 hidden-sm-and-down"
          >
            {{ link.name }}
          </v-btn>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
        <v-navigation-drawer color="secondary" v-model="sidebar" app right hide-overlay temporary>
          <v-list>
            <v-list-item v-for="link in links"
                         :key="link.name"
                         :text="link.name !== 'Github'"
                         :rounded="link.name === 'Github'"
                         :color="link.name === 'Github' ? 'red':''"
                         :to="link.url">{{link.name}}</v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-container>
    </v-app-bar>

    <v-main class="secondary">
      <router-view/>
    </v-main>

      <cookie></cookie>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Cookie from "@/components/Cookie";

export default {
  components: {Footer},
  data: () => ({
    sidebar: false,
    links: [
      {name: 'Accueil', url: '/'},
      {name: 'Nos projets', url: 'nos-projets'},
      {name: 'Statistiques', url: 'stats'},
      {name: 'Status', url: 'status'},
      {name: 'Github', url: 'github'}
    ],
  }),
}
</script>
