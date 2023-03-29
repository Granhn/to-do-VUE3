<script setup>

    const props = defineProps(['nombreTarea','descripcionTarea']);

</script>


<template>

    <h3>Tarea card</h3>
    <h4>{{ nombreTarea }} - {{ descripcionTarea }}</h4>

</template>