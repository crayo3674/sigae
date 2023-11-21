import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import AttendanceView from '@/views/AttendanceView.vue';
import IncidencesForm from '@/views/IncidentsFormView.vue';
import IncidentsTableView from '@/views/IncidentsTableView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/rrhh',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/attendance',
          name: 'attendance',
          component: AttendanceView
        },
        {
          path: '/incidentsForm',
          name: 'incidentsForm',
          component: IncidencesForm
        },
        {
          path: '/incidentsTable',
          name: 'incidentsTable',
          component: IncidentsTableView
        }
      ]
    }
  ],
})

export default router
