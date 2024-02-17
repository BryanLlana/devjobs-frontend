import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { inject } from 'vue'
import { vacantApi } from '@/api/vacant'
import { useRouter } from 'vue-router' 

export const useVacantStore = defineStore('vacant', () => {
  const toast = inject('toast')
  
  const vacant = reactive({
    title: '',
    company: '',
    location: '',
    salary: '',
    contract: '',
    description: '',
    skills: new Set()
  })

  const vacantEdit = reactive({
    _id: '',
    title: '',
    company: '',
    location: '',
    salary: '',
    contract: '',
    description: '',
    skills: new Set()
  })

  const vacants = ref([])

  const errorInput = ref({})
  const router = useRouter()

  const getVacant = async (id) => {
    try {
      const { data: { candidates, ...values } } = await vacantApi.getVacant(id)
      Object.assign(vacantEdit, values)
    } catch (error) {
      router.push({ name: 'home' })
      toast.open({
        message: error.response.data.message,
        type: 'error'
      })
    }
  }

  const getVacants = async () => {
    try {
      const { data } = await vacantApi.getVacants()
      vacants.value = data
    } catch (error) {
      console.log(error)
    }
  }

  const createVacant = async e => {
    e.preventDefault()

    if (vacant.title === '') errorInput.value.title = 'El título es obligatorio'
    if (vacant.company === '') errorInput.value.company = 'La empresa es obligatoria'
    if (vacant.location === '') errorInput.value.location = 'La ubicación es obligatoria'
    if (vacant.contract === '') errorInput.value.contract = 'El contrato es obligatorio'
    if (vacant.description === '') errorInput.value.description = 'La descripción es obligatoria'
    if (vacant.skills.size === 0) errorInput.value.skills = 'Los skills son obligatorios'

    try {
      const { data } = await vacantApi.createVacant({
        ...vacant,
        skills: [...vacant.skills]
      })

      errorInput.value = {}
      vacant.title = ''
      vacant.company = ''
      vacant.location = ''
      vacant.salary = ''
      vacant.contract = ''
      vacant.description = ''
      vacant.skills = new Set()

      toast.open({
        message: data.message,
        type: 'success'
      })

      setTimeout(() => {
        router.push({ name: 'home' })
      }, 3000)
      
    } catch (error) {
      console.log(error)
    }
  }

  const updateVacant = async e => {
    e.preventDefault()

    if (vacantEdit.title === '') errorInput.value.title = 'El título es obligatorio'
    if (vacantEdit.company === '') errorInput.value.company = 'La empresa es obligatoria'
    if (vacantEdit.location === '') errorInput.value.location = 'La ubicación es obligatoria'
    if (vacantEdit.contract === '') errorInput.value.contract = 'El contrato es obligatorio'
    if (vacantEdit.description === '') errorInput.value.description = 'La descripción es obligatoria'
    if (vacantEdit.skills.size === 0) errorInput.value.skills = 'Los skills son obligatorios'

    try {
      const { _id, ...values } = vacantEdit
      const { data } = await vacantApi.updateVacant(vacantEdit._id, {
        ...values,
        skills: [...vacantEdit.skills]
      })

      errorInput.value = {}
      vacantEdit.title = ''
      vacantEdit.company = ''
      vacantEdit.location = ''
      vacantEdit.salary = ''
      vacantEdit.contract = ''
      vacantEdit.description = ''
      vacantEdit.skills = new Set()

      toast.open({
        message: data.message,
        type: 'success'
      })
      router.push({ name: 'home' })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    vacant,
    vacantEdit,
    vacants,
    createVacant,
    updateVacant,
    errorInput,
    getVacants,
    getVacant
  }
})