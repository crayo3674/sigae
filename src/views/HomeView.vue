<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex gap-4 mb-6">
    <router-link :to="{ name: 'home' }" class="border p-2 rounded-md">Home</router-link>

    <router-link :to="{ name: 'attendance' }" class="border p-2 rounded-md">Asistencias</router-link>

    <router-link :to="{ name: 'incidentsForm' }" class="border p-2 rounded-md">Formulario Incidencias</router-link>

    <router-link :to="{ name: 'incidentsTable' }" class="border p-2 rounded-md">Tabla Incidencias</router-link>
  </div>
  <RouterView />
</template>
