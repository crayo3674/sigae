<script setup lang="ts">
  import {fakeIncidencesData} from '@/utils/constants';
  import type { Incidence } from '@/models/interfaces';
  import { onMounted, ref } from 'vue';

  const incidences = ref<Incidence[]>([]);

  const openedIncidences = ref<Set<string>>(new Set());

  onMounted(() => {
    incidences.value = fakeIncidencesData ;
  });

  const approveIncidence = (incidenceId: string) => {
  };

  const rejectIncidence = (incidenceId: string) => {
  };

  const toggleDetails = (incidenceId: string) => {
    const isIncidenceOpened = openedIncidences.value.has(incidenceId);

    if (isIncidenceOpened) {
      openedIncidences.value.delete(incidenceId);
    } else {
      openedIncidences.value.add(incidenceId);
    }
  };
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Tabla de Incidencias</h2>
    <table class="min-w-full">
      <thead>
        <tr class="text-center bg-gray-300 border-2 border-gray-200">
          <th></th>
          <th>Status</th>

          <th>Fecha</th>

          <th>Cédula</th>

          <th>Nombre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="incidence in incidences">
          <tr class="text-center h-10 hover:bg-gray-200">
            <td class="font-light border-2 border-gray-200">
              <button @click="toggleDetails(incidence.id)" class="bg-blue-200 px-2 rounded-md">
                {{ openedIncidences.has(incidence.id) ? '-' : '+' }}
              </button>
            </td>

            <td class="font-light border-2 border-gray-200">{{ incidence.status }}</td>

            <td class="text-sm font-light border-2 border-gray-200">{{ incidence.date }}</td>

            <td class="text-sm font-light border-2 border-gray-200">{{ incidence.worker.id }}</td>

            <td class="text-sm font-light border-2 border-gray-200">{{ incidence.worker.name }}</td>
            <td class="text-sm font-light border-2 border-gray-200">
              <div class="flex justify-center w-ful gap-1">
                <button @click="approveIncidence(incidence.id)" class="bg-green-500 text-white rounded w-6 h-6"></button>

                <button @click="rejectIncidence(incidence.id)" class="bg-red-500 text-white py-1 w-6 h-6 rounded"></button>
              </div>
            </td>
          </tr>

          <tr v-if="openedIncidences.has(incidence.id)">
            <td :colspan="6" class="text-sm font-light border-2 border-gray-200 bg-gray-100">
              <div class="p-2 flex justify-evenly">
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
