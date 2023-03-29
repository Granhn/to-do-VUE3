
<script setup>

    import { storeToRefs } from 'pinia';
    import { useTareasStore } from '../stores/useTareasStore';
    const tareasStore = useTareasStore();
    const { eliminarTarea, editarTarea } = tareasStore;
    const { tareas } = storeToRefs(useTareasStore());

</script>


<template>
    <h3>Tareas</h3>
    <ul>
        <li v-for="(tarea,index) in tareas" key="index">
            {{tarea.nombreTarea}}
        </li>
    </ul>
</template>