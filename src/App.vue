
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import MenuLateral from './components/generales/MenuLateral.vue'

</script>

<template>
  <MenuLateral/>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img class="mx-auto" src="/vite.svg" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img class="mx-auto" src="./assets/vue.svg" alt="Vue logo" />
    </a>
  </div>
  <div class="text-center">
    <p>Aquí el ícono awesome</p>
    <font-awesome-icon :icon="['fas', 'house']" size="xl" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>

</style>
