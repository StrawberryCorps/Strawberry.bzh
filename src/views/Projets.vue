<template>
  <section>
    <header-page description="Tu trouveras ici la liste des différents projets que nous avons pu réaliser !" titre="Nos projets"></header-page>
    <v-row>
      <v-col cols="6">
        <v-img
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            class="align-center"
            src="https://raw.githubusercontent.com/StrawberryCorps/.github/main/github-metrics.svg" alt="GitHub"/>
      </v-col>
      <v-col cols="6">
        <v-img
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            class="align-center"
            src="https://raw.githubusercontent.com/StrawberryCorps/.github/main/metrics.plugin.pagespeed.detailed.svg" alt="GitHub"/>
      </v-col>
    </v-row>
  </section>
</template>

<script>

import HeaderPage from "@/components/HeaderPage";
export default {
  name: 'Projets',
  components: {HeaderPage}
}
</script>
