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
    const eliminarTarea = tareaABorrar => tareas.value = tareas.value.filter( tarea => tarea != tareaABorrar )
    const editarTarea = () => console.log("Tarea editada!!")
    
    return { tareas, agregarTarea, eliminarTarea, editarTarea }
});