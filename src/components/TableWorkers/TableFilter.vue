<script setup lang="ts">
  import type { WorkerData } from '@/models/interfaces';
  import type { Ref } from 'vue';
  import { inject, ref, watch } from 'vue';

  const { departments } = defineProps<{
    departments: string[],
  }>();

  const { workersData, setFilteredWorkersData } = inject('workersData') as {
    workersData: Ref<WorkerData[]>,
    setFilteredWorkersData: (workers: WorkerData[]) => void
  };

  // State filters
  const searchQuery = ref('');
  const selectedDepartment = ref('');
  const date = ref<Date[]>();

  defineExpose({ date });

  // Filters functions
  const matchesSearch = (worker: WorkerData) => {
    const query = searchQuery.value.toLowerCase();

    return !query || worker.name.toLowerCase().includes(query) || worker.id.toLowerCase().includes(query);
  };

  const matchesDepartment = (worker: WorkerData) => {
    const departmentFilter = selectedDepartment.value.toLowerCase();

    return !departmentFilter || worker.department?.toLowerCase() === departmentFilter;
  };

  const filterWorkers = (worker: WorkerData) => {
    return matchesSearch(worker) && matchesDepartment(worker);
  };

  const applyFilters = () => {
    setFilteredWorkersData(workersData.value.filter(filterWorkers));
  }

  watch([searchQuery, selectedDepartment], applyFilters);
</script>

<template>
  <div class="flex items-center gap-1.5 p-4 rounded-lg bg-gray-100 flex-wrap">
    <input
        v-model="searchQuery"
        type="text"
        id="search"
        name="search"
        class="p-2 border border-gray-300 rounded-md h-9"
        placeholder="Nombre o cédula"
    />

    <select
        v-model="selectedDepartment"
        id="department"
        name="department"
        class="p-2 border border-gray-300 rounded-md h-9 text-sm font-light">
      <option v-for="department in departments" :key="department" :value="department">{{ department }}</option>
    </select>

    <div>
      <VueDatePicker
          class="border p-2 rounded-md"
          v-model="date"
          placeholder="Selecciona un intérvalo"
          range
          :enable-time-picker="false"
          :preview-format="'yyyy-MM-dd'"
          :max-range="30"
          :max-date="new Date()"
      />
    </div>
  </div>
</template>
