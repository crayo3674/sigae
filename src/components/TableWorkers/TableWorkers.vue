<script setup lang="ts">
  import TableHelperInfo from '@/components/TableWorkers/HelperInfo.vue';
  import TableFilter from '@/components/TableWorkers/TableFilter.vue';
  import type { CheckIn, Incident, WorkerData } from '@/models/interfaces';
  import { ref, onMounted, computed, provide } from 'vue';
  // Fake data import statement
  import { fakeWorkersDataAttendance } from '@/utils/constants';

  // Workers data
  const workersData = ref<WorkerData[]>([]);
  const filteredWorkersData = ref<WorkerData[]>([]);

  // Ref expose
  const date = ref<{ date: Date[] }>();

  onMounted(() => {
    loadData();
  });

  const loadData = () => {
    workersData.value = fakeWorkersDataAttendance;
    filteredWorkersData.value = fakeWorkersDataAttendance;
  };

  const setFilteredWorkersData = (workers: WorkerData[]) => {
    filteredWorkersData.value = workers;
  }

  const getAllDepartments = computed(() => {
    const uniqueDepartments = new Set<string>();

    workersData.value.forEach((worker) => {
      if (worker.department) {
        uniqueDepartments.add(worker.department);
      }
    });

    return Array.from(uniqueDepartments);
  });

  const getAllDatesRange = (startDate: Date, endDate: Date) => {
    const allDates = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      allDates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return allDates;
  }

  const getCellStyle = (worker: WorkerData, date: string) => {
    const attendance = worker.attendance[date];

    if (Array.isArray(attendance)) {
      if (attendance.length > 1) return 'bg-green-400';

      return 'bg-orange-400';
    } else if (!attendance) {
      return 'bg-red-400';
    } else {
      return 'bg-blue-400';
    }
  };

  const getAllDates = () => {
    const allDatesSet = new Set();

    workersData.value.forEach((worker) => {
      Object.keys(worker.attendance).forEach((date) => {
        allDatesSet.add(date);
      });
    });

    const allDates = Array.from(allDatesSet) as string[];

    return allDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  };

  const filteredDate = computed(() => {
    if (date.value?.date?.length === 2) {
      return getAllDatesRange(date.value?.date[0], date.value?.date[1]);
    }

    return getAllDates();
  });

  provide('workersData', { workersData, setFilteredWorkersData });
</script>

<template>
  <div class="flex mb-4 gap-2 justify-between flex-wrap">
    <TableFilter
        :departments="getAllDepartments"
        ref="date"
    />

    <div class="p-4">
      <button class="bg-blue-300 h-8 w-8 rounded-full"></button>
    </div>
  </div>

  <div class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="text-center bg-gray-300 border-2 border-gray-200">
          <th>Nombre</th>

          <th>Cédula</th>

          <th>Departamento</th>

          <th class="w-12" v-for="date in filteredDate" :key="date">{{ date.slice(-2) }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="worker in filteredWorkersData" :key="worker.id" class="hover:bg-gray-200 text-center">
          <td class="text-sm font-light border-2 border-gray-200">{{ worker.name }}</td>

          <td class="text-sm font-light border-2 border-gray-200">{{ worker.id }}</td>

          <td class="text-sm font-light border-2 border-gray-200">{{ worker.department }}</td>

          <td v-for="dateElem in filteredDate" :key="dateElem" class="text-sm font-light border-2 border-gray-200">
            <VDropdown :triggers="['hover', 'focus']" :placement="'right'">
              <div class="h-8 w-full rounded-sm" :class="getCellStyle(worker, dateElem)"></div>

              <template #popper>
                <div class="m-2">
                  <div v-if="Array.isArray(worker.attendance[dateElem])" class="flex flex-col gap-1.5">
                    <div class="text-sm font-thin" v-for="(checkIn, checkInIndex) in worker.attendance[dateElem]" :key="checkInIndex">
                      {{ (checkIn as CheckIn).time }} - {{ (checkIn as CheckIn).type }}
                    </div>
                  </div>

                  <div v-else-if="!worker.attendance[dateElem]" class="text-sm font-thin">
                    Inasistencia
                  </div>

                  <div v-else class="text-xs font-thin">
                    {{ (worker.attendance[dateElem] as Incident).description }}
                  </div>
                </div>
              </template>
            </VDropdown>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-4 flex justify-end">
    <TableHelperInfo />
  </div>
</template>
