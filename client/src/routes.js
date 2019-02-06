import ExperienceGrid from './components/ExperienceGrid.vue'
import Experience from './components/Experience.vue'

export const routes = [
  {
    path: '',
    name: 'experience-grid',
    component: ExperienceGrid
  },
  {
    path: 'experience/:id',
    name: 'experience',
    component: Experience
  }
  ]
