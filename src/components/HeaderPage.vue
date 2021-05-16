<template>
  <v-parallax
      dark
      src="@/assets/background.png"
      height="200"
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          class="text-center"
          cols="12"
      >
        <h1 class="display-1 mb-4">
          {{ titre }}
        </h1>
        <h4 class="subheading font-weight-thin">
          {{ description }}
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "HeaderPage",
  props: ['titre', 'description']
}
</script>
