<script setup>
  import cabecera from './components/cabecera.vue'
  import pie from './components/pie.vue'
</script>

<template>
  <header>
    <cabecera></cabecera>
  </header>

  <main class="container-fluid">
    <router-view/>
  </main>

  <footer>
    <pie></pie>
  </footer>
</template>

<style scoped>
   

</style>
