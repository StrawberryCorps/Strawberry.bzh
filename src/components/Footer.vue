<template>
  <v-footer
      color="primary"
      padless>
    <v-row
        justify="center"
        align="center"
        class="align-center pt-8">
      <v-col cols="6" class="text-center">
        <h2 class="text-center text-uppercase font-weight-thin">
          A propos de nous
        </h2>
        <div class="ma-4">
            Bonjour, bienvenue sur notre site :) ! On a rien a dire pour le moment mais ça va venir
        </div>
      </v-col>
      <v-col cols="6" class="text-center">
        <h2 class="text-center text-uppercase font-weight-thin">
          Réseaux sociaux
        </h2>
        <div class="">
          <v-btn fab icon class="" to="discord">
            <v-icon>mdi-discord</v-icon>
          </v-btn>
          <v-btn fab icon class="" to="github">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col
          class="primary pa-4 text-uppercase white--text"
          cols="12">
        <small class="pl-10">© 2020-{{ new Date().getFullYear() }} StrawberryCorps — Tous droits réservés</small>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>
