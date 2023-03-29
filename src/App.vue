<script setup>
  import CrearTarea from './Components/CrearTarea.vue';
  import Navegacion from './Components/Navegacion.vue';



</script>

<template>
  <Navegacion></Navegacion>
  <CrearTarea></CrearTarea>
  <RouterView></RouterView>

</template>


<style>

body{
  background-color: #eef;
}

</style>