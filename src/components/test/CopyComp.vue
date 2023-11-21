<script setup lang="ts">
// import {WorkerData} from "@/models/interfaces";
// import {computed} from "vue/dist/vue";


// const getAllDatesRange = (startDate: Date, endDate: Date) => {
//   const allDates = [];
//   const currentDate = new Date(startDate);
//
//   while (currentDate <= endDate) {
//     allDates.push(currentDate.toISOString().split('T')[0]);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }
//
//   return allDates;
// }
//
// const getAllDates = () => {
//   const allDatesSet = new Set();
//
//   workersData.value.forEach((worker) => {
//     Object.keys(worker.attendance).forEach((date) => {
//       allDatesSet.add(date);
//     });
//   });
//
//   const allDates = Array.from(allDatesSet) as string[];
//
//   return allDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
// };

const test = 1;
console.log(test);

// const getCellStyle = (worker: WorkerData, date: string) => {
//   const attendance = worker.attendance[date];
//
//   if (Array.isArray(attendance)) {
//     if (attendance.length > 1) return 'bg-green-400';
//
//     return 'bg-orange-400';
//   } else if (!attendance) {
//     return 'bg-red-400';
//   } else {
//     return 'bg-blue-400';
//   }
// };
//
// const filteredDate = computed(() => {
//   if (date.value?.length === 2) {
//     return getAllDatesRange(date.value[0], date.value[1]);
//   }
//
//   return getAllDates();
// });
</script>

<template>
  <!--    <VueDatePicker-->
  <!--        v-model="date"-->
  <!--        placeholder="Selecciona un intérvalo"-->
  <!--        range-->
  <!--        :enable-time-picker="false"-->
  <!--        :preview-format="'yyyy-MM-dd'"-->
  <!--        :max-range="30"-->
  <!--        :max-date="new Date()"-->
  <!--    />-->
  <span>hi</span>
<!--  <div class="bg-gray-100 p-2 rounded-lg overflow-x-auto">-->
<!--    <table class="overflow-x-visible w-full">-->
<!--      <thead>-->
<!--      <tr class="test-center bg-gray-300 border-2 border-gray-200">-->
<!--        <th>Nombre</th>-->
<!--        <th>Cédula</th>-->
<!--        <th>Departamento</th>-->
<!--        <th class="w-12" v-for="dateElem in filteredDate" :key="dateElem">{{ dateElem.slice(-2) }}</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="worker in filteredWorkersData" :key="worker.id" class="hover:bg-gray-200 test-center">-->
<!--        <td class="test-sm font-light border-2 border-gray-200">{{ worker.name }}</td>-->
<!--        <td class="test-sm font-light border-2 border-gray-200">{{ worker.id }}</td>-->
<!--        <td class="test-sm font-light border-2 border-gray-200">{{ worker.department }}</td>-->
<!--        <td v-for="dateElem in filteredDate" :key="dateElem" class="test-sm font-light border-2 border-gray-200">-->
<!--          <VDropdown :triggers="['hover', 'focus']" :placement="'right'">-->
<!--            <div class="h-8 w-full rounded-sm" :class="getCellStyle(worker, dateElem)"></div>-->
<!--            <template #popper>-->
<!--              <div class="m-2">-->
<!--                <div v-if="Array.isArray(worker.attendance[dateElem])" class="flex flex-col gap-1.5">-->
<!--                  <div class="test-xs font-thin" v-for="(checkIn, checkInIndex) in worker.attendance[dateElem]" :key="checkInIndex">-->
<!--                    {{ (checkIn as CheckIn).time }} - {{ (checkIn as CheckIn).type }}-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div v-else-if="!worker.attendance[dateElem]" class="test-xs font-thin">-->
<!--                  Inasistencia-->
<!--                </div>-->
<!--                <div v-else class="test-xs font-thin">-->
<!--                  {{ (worker.attendance[dateElem] as Incident).description }}-->
<!--                </div>-->
<!--              </div>-->
<!--            </template>-->
<!--          </VDropdown>-->
<!--        </td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--  </div>-->
</template>

<style scoped>

</style>