import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { vacantApi } from '../../api/vacant'

export const useVacantStore = defineStore('vacant', () => {
  const vacant = reactive({
    title: '',
    company: '',
    location: '',
    salary: '',
    contract: '',
    description: '',
    skills: new Set()
  })

  const createVacant = async e => {
    e.preventDefault()

    try {
      const { data } = await vacantApi.createVacant('da')
    } catch (error) {
      
    }
  }

  return {
    vacant,
    createVacant
  }
})