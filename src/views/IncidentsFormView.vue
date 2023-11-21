<script setup lang="ts">
  import type { WorkerInfo } from '@/models/interfaces';
  import { fakeWorkersDataIncidence } from '@/utils/constants';
  import { ref, onMounted, computed } from 'vue';

  const workersData = ref<WorkerInfo[]>([]);

  const selectedWorker = ref<WorkerInfo | null>(null);
  const incidenceDetails = ref('');
  const selectedInterval = ref<Date[]>([]);

  const searchQuery = ref('');
  const selectedDepartment = ref('');

  onMounted(() => {
    workersData.value = fakeWorkersDataIncidence;
  });

  const getAllDepartments = computed(() => {
    const uniqueDepartments = new Set<string>();

    workersData.value.forEach((worker) => {
      if (worker.department) {
        uniqueDepartments.add(worker.department);
      }
    });

    return Array.from(uniqueDepartments);
  });

  const selectWorker = (worker: WorkerInfo) => {
    if (incidenceDetails.value.trim() !== '' || selectedInterval.value.length !== 0) {
      const confirmLeave = window.confirm('¿Estás seguro de cambiar de trabajador? Los detalles de la incidencia no se han enviado y se perderán.');

      if (!confirmLeave) {
        return;
      }
    }

    selectedWorker.value = worker;
    incidenceDetails.value = '';
  };

</script>

<template>
  <div class="grid sm:grid-cols-12 gap-2 h-5/6">
    <div class="sm:col-span-5 bg-gray-100 rounded-lg p-4 overflow-y-auto">
      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <div class="flex items-center gap-1.5 rounded-lg bg-gray-100 flex-wrap">
            <input
                v-model="searchQuery"
                type="text"
                id="search"
                name="search"
                class="p-2 border border-gray-300 rounded-md h-8 w-36"
                placeholder="Nombre o cédula"
            />

            <select
                v-model="selectedDepartment"
                id="department"
                name="department"
                class="p-2 border border-gray-300 rounded-md h-8 text-sm font-light">
              <option v-for="department in getAllDepartments" :key="department" :value="department">{{ department }}</option>
            </select>
          </div>

          <div class="">
            <button class="bg-blue-300 h-6 w-6 rounded-full"></button>
          </div>
        </div>

        <div>
          <table class="min-w-full">
            <thead class="sticky -top-4 bg-gray-300 border-2 border-gray-200">
            <tr class="text-center">
              <th>Nombre</th>

              <th>Cédula</th>

              <th>Departamento</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="worker in workersData"
                class="text-center h-10"
                :key="worker.id"
                @click="selectWorker(worker)"
                :class="{
                'bg-gray-300': worker === selectedWorker,
               'hover:bg-gray-200': worker !== selectedWorker
              }">
              <td class="text-sm font-light border-2 border-gray-200">{{ worker.name }}</td>

              <td class="text-sm font-light border-2 border-gray-200">{{ worker.id }}</td>

              <td class="text-sm font-light border-2 border-gray-200">{{ worker.department }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="sm:col-span-7 bg-gray-100 rounded-lg p-4">
      <div v-if="selectedWorker" class="flex flex-col h-full">
        <div class="flex mb-6 justify-between">
          <h1 class="font-bold text-xl">Formulario de incidencia</h1>

          <div>
            <div class="text-gray-500 text-right">{{ selectedWorker.name }}</div>
            <div class="font-thin text-gray-500 text-right">{{ selectedWorker.id }}</div>
          </div>
        </div>

        <form class="flex flex-col gap-8 h-full justify-between">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <label for="incidenceDetails" class="text-sm font-medium text-gray-700">Detalles de la Incidencia:</label>

              <textarea v-model="incidenceDetails" id="incidenceDetails" rows="4" class="mt-1 p-2 block w-full border rounded-md"></textarea>
            </div>

            <div class="flex flex-col gap-2">
              <label for="selectedInterval" class="text-sm font-medium text-gray-700">Intervalo de Tiempo:</label>

              <VueDatePicker
                  placeholder="Selecciona un intérvalo"
                  range
                  :enable-time-picker="false"
                  :preview-format="'yyyy-MM-dd'"
                  :max-range="30"
                  :min-date="new Date()"
                  v-model="selectedInterval"
                  id="selectedInterval"
                  class="mt-1 p-2 block w-full border rounded-md"
              />
            </div>
          </div>

          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded self-end self">Enviar Incidencia</button>
        </form>
      </div>

      <div v-else class="flex items-center justify-center h-full">
        <h1 class="font-sans">Seleccione un trabajador</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>