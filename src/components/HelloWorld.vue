<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{ msg: string }>()

  const count = ref(0)
</script>

<template>
  <h1 class="text-center">{{ msg }}</h1>

  <div id="boton">
    <button type="button" @click="count++">contador es {{ count }}</button>
    <p>
      Este es el componente HelloWord.
    </p>
  </div>
  <br><hr><br>
  <p class="text-center">AQUI VA EL COMPONENTE VCARD DE VUETIFY</p>
  <br>
  <div class="vuetif">
    <v-card
      class="mx-auto"
      max-width="400"
      >
      <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>Lindas Playas</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4">
        Playa Número 13
      </v-card-subtitle>

      <v-card-text>
        <div>La Lisera</div>

        <div>Arica - Chile</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange">
          Compartir
        </v-btn>

        <v-btn color="orange">
          Más Detalles
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  
</template>

<style scoped lang="scss">
  @import '@/assets/HelloWorld';
</style>
