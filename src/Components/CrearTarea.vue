<script setup>

    import { ref } from 'vue';
    import { useTareasStore } from '../stores/useTareasStore';
    import { computed } from '@vue/reactivity';

    let nombreTarea = ref('');
    let descripcionTarea = ref('');
    const tareasStore = useTareasStore();
    const limpiar = () => {
        nombreTarea.value = "";
        descripcionTarea.value = "";
    }
    const crearTarea= () =>{
        tareasStore.agregarTarea({
            nombreTarea: nombreTarea.value,
            descripcionTarea: descripcionTarea.value
        });
        limpiar();
    }
    const permitirCrearTarea = computed(() =>{
        if ( (descripcionTarea.value && nombreTarea.value) === '' )  return true
        else return false
    })


</script>


<template>

    <div class="card border border-primary m-5">
        <div class="card-header">
            <h2 class="card-tittle">Crea una tarea</h2>
        </div>
        <div class="card-body">
            <label for="nombreTarea" class="form-label">Nombre tarea:</label>
            <input type="text" class="form-control" id="nombreTarea" placeholder="Ingresa el nombre de tu tarea" v-model="nombreTarea">
            <label for="exampleFormControlTextarea1" class="form-label mt-3">Descripcion de la tarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Ingresa la descripcion de tu tarea" rows="3" v-model="descripcionTarea"></textarea>
            <button class="btn btn-primary mt-3" @click="crearTarea" :disabled="permitirCrearTarea">Crear tarea</button>
            <button class="btn btn-warning mt-3 ms-3" @click="limpiar">Limpiar</button>
        </div>
  </div>

</template>