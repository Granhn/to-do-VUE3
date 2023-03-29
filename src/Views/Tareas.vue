
<script setup>

    import { storeToRefs } from 'pinia';
    import { useTareasStore } from '../stores/useTareasStore';
    import TareaCard from '../Components/TareaCard.vue';

    const tareasStore = useTareasStore();
    const { tareas } = storeToRefs(useTareasStore());

</script>


<template>
    <h3 style="text-align: center; margin-bottom: 2vw;">Tareas</h3>
    <ul class="flex">
        <li v-for="(tarea,index) in tareas" key="index" class="hijo">
            <TareaCard
                :nombreTarea="tarea.nombreTarea"
                :descripcionTarea="tarea.descripcionTarea"
            />
        </li>
    </ul>
</template>

<style>

    .flex{
        display: flex;
        flex-flow: row wrap;
        justify-content:  space-evenly;
    }
</style>