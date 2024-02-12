import { api } from "@/lib/axios";

export const vacantApi = {
  createVacant: async data => {
    return await api.post('/vacant', data)
  }
}