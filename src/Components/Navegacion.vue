<script setup>
    let viendoTarea = false;

</script>

<template>
    <nav class="navbar bg-body-tertiary bg-warning">
        <div class="container-fluid">
                <router-link to="/">
                    <span class="navbar-brand mb-0 h1">Home</span>
                </router-link>
                <router-link to="/tareas">
                    <span class="navbar-brand mb-0 h1" v-if="viendoTarea">Ver tareas borradas</span>
                    <span class="navbar-brand mb-0 h1" v-else>Ver tareas</span>
                </router-link>
            
            
            <span class="navbar-brand mb-0 h1">Limpiar tareas</span>
        </div>
    </nav>
</template>





