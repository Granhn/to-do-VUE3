<script setup>

    import { useTareasStore } from '../stores/useTareasStore';

    const tareasStore = useTareasStore();
    const { eliminarTarea, editarTarea } = tareasStore
    const props = defineProps(['nombreTarea','descripcionTarea','id']);
</script>


<template>

    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3>{{ nombreTarea }}</h3>
        </div>
        <div class="card-body">
            <h5 class="card-title">Descripcion</h5>
            <p class="card-text">{{descripcionTarea}}</p>
            <button class="btn btn-danger" @click="eliminarTarea(id)">Borrar tarea</button>
            <button class="btn btn-info">Marcar como lista</button>
        </div>
    </div>

</template>