<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-2 gap-x-4 gap-y-2 bg-gray-100 p-3 rounded-lg">
    <div class="flex items-center flex-row-reverse gap-2">
      <div class="h-2 w-2 bg-green-400 flex-none"></div>

      <span class="font-thin text-xs text-right">Entrada y salida en el mismo día</span>
    </div>

    <div class="flex items-center flex-row-reverse gap-2">
      <div class="h-2 w-2 bg-orange-400 flex-none"></div>

      <span class="font-thin text-xs text-right">Entrada y salida en diferentes días</span>
    </div>

    <div class="flex items-center flex-row-reverse gap-2">
      <div class="h-2 w-2 bg-red-400 flex-none"></div>

      <span class="font-thin text-xs text-right">Inasistencia</span>
    </div>

    <div class="flex items-center flex-row-reverse gap-2">
      <div class="h-2 w-2 bg-blue-400 flex-none"></div>

      <span class="font-thin text-xs text-right">Justificación</span>
    </div>
  </div>
</template>

<style scoped>

</style>