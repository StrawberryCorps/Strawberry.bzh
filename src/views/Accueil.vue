<template>
  <section>
    <header>
      <v-card>
        <v-img
            dark
            height="95vh"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            class="align-center"
            src="@/assets/background.png">
          <v-row
              align="center"
              justify="center">
            <v-col
                class="text-center pa-5"
                sm="8"
                cols="12">
              <h1 class="display-1 font-weight-thin mb-4 pl-16 pr-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed gravida nisi. Morbi nec neque id augue cursus finibus. Proin suscipit tristique arcu sed varius.
              </h1>
              <v-btn
                  rounded
                  elevation="2"
                  color="red"
              >En savoir plus</v-btn>
            </v-col>
            <v-col
                class="text-center" sm="4"
                cols="12">
              <v-img
                  dark
                  width="30%"
                  class="align-center"
                  src="@/assets/fraise_hello.png"></v-img>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </header>
    <v-sheet
        rounded="lg" class="pa-16" color="secondary">
      <v-row align="center" justify="center">
          <v-col class="text-center" cols="6" md="2">
              <v-img
                  dark
                  max-height="300"
                  contain
                  src="@/assets/fraise_hello.png"></v-img>
          </v-col>
          <v-col class="text-center" cols="6">
            <h1 class="display-1 text-uppercase font-weight-thin mb-4">
              A propos
            </h1>
            <h4 class="subheading">
              In tincidunt cursus lacus id blandit. Mauris ut lacus dignissim, pretium mauris id, molestie enim. Curabitur eget volutpat nisi. Fusce elementum sagittis lobortis. Nullam ac odio felis. Maecenas pulvinar vehicula libero. Donec eget orci arcu. Nullam volutpat ligula urna, eu venenatis ipsum lobortis gravida. Integer porttitor risus vel felis gravida ullamcorper vitae sed augue. In finibus gravida lacus sed accumsan.
            </h4>
          </v-col>
      </v-row>
    </v-sheet>
    <v-parallax src="@/assets/background.png"></v-parallax>
    <v-sheet color="primary">
        <v-responsive>
          <h1 class="display-1 text-center text-uppercase font-weight-thin mb-4 pa-8">
            Nous suivre
          </h1>
          <v-row>
            <v-col cols="6" class="text-center pa-4">
              <iframe class="pb-5" src="https://discord.com/widget?id=722000591043428372&theme=dark" width="50%" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </v-col>
            <v-col cols="6" class="text-center pa-4">
              <p>Bonjour je suis un text qui permet de nous suivre sur discord </p>

              <v-form class="pl-16 pr-16 pt-5 pb-5">
                <v-text-field
                    rounded
                    color="red"
                    filled
                    background-color="accent"
                    class="pr-16 pl-16"
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="Votre adresse mail"></v-text-field>

                <v-btn rounded
                       elevation="2"
                       color="red">S'abonner</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-responsive>
    </v-sheet>
    <v-parallax gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" src="@/assets/background.png"></v-parallax>
  </section>
</template>

<script>
export default {
  name: 'Accueil',
  components: {},
  data () {
    return {
      email: '',
      rules: {
        required: value => !!value || 'Requis.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'E-mail invalide.'
        },
      },
    }
  },
}
</script>
