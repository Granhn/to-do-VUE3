import { defineStore } from "pinia";
import { ref } from "vue";

export const useTareasStore = defineStore('store-tareas', () => {

    /*
        OBJETO TAREA
        {
            descripcionTarea,
            nombreTarea
        }
    */

    const tareas = ref([]);
    const agregarTarea = tarea => tareas.value.push(tarea)
    const eliminarTarea = (idTarea) => {
        tareas.value = tareas.value.filter( tarea => tarea.id !== idTarea )
    }
    const editarTarea = () => console.log("Tarea editada!!")
    
    return { tareas, agregarTarea, eliminarTarea, editarTarea }
});