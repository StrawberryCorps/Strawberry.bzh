<template>
  <v-footer
      color="primary"
      padless>
    <v-row
        justify="center"
        align="center"
        class="align-center">
      <v-col cols="6" class="text-center">

      </v-col>
      <v-col cols="6" class="text-center">
        <h2 class="text-center text-uppercase font-weight-thin mb-4 pt-8">
          Réseaux sociaux
        </h2>
        <v-btn fab x-large icon class="ma-2" to="discord">
          <v-icon>mdi-discord</v-icon>
        </v-btn>
        <v-btn fab x-large icon class="ma-2" to="github">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-col>

      <v-col
          class="primary pa-4 text-uppercase white--text"
          cols="12">
        <small>© 2020-{{ new Date().getFullYear() }} StrawberryCorps — Tous droits réservés</small>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
  }),
}
</script>

<style scoped>

</style>
