import { api } from "@/lib/axios";

export const vacantApi = {
  createVacant: async data => {
    return await api.post('/vacant', data)
  },
  getVacants: async () => {
    return await api.get('/vacant')
  },
  getVacant: async id => {
    return await api.get(`/vacant/${id}`)
  }
}