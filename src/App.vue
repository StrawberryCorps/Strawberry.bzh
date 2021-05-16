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
          >
            {{ link.name }}
          </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="secondary">
      <router-view/>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {Footer},
  data: () => ({
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
