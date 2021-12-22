<template>
  <v-snackbar v-model="isOpen" timeout="-1">
    Strawberry souhaite utiliser les cookies de tracking
    <template v-slot:action="{ attrs }">
      <v-btn color="success" text v-bind="attrs" @click="accept">
        Oui, j'accepte
      </v-btn>
      <v-btn color="error" text v-bind="attrs" @click="deny">
        Refuser
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { bootstrap } from "vue-gtag";

@Component
export default class Cookie extends Vue {
  public isOpen?: boolean = false;

  public created() {
    this.isOpen = localStorage.getItem("rgpd:google-analytics") === null;
  }

  public accept() {
    this.isOpen = false;
    bootstrap().then(() => {
      localStorage.setItem("rgpd:google-analytics", "true");
    });
  }

  public deny() {
    this.isOpen = false;
    localStorage.setItem("rgpd:google-analytics", "false");
  }
}
</script>
