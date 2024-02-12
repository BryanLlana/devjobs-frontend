<script setup>
import LayoutDevJob from '@/layouts/LayoutDevJob.vue'
import Vacant from '@/components/Vacant.vue'
import { useVacantStore } from '@/stores/vacant';
import { onMounted } from 'vue'

const vacantStore = useVacantStore()

onMounted(() => {
  vacantStore.getVacants()
})
</script>

<template>
  <LayoutDevJob :button="true" :bar="true" name="DevJobs" tagline="Encuentra y publica trabajos para desarrolladores web">
    <main class="lista-vacantes">
      <h2>Lista de Vacantes</h2>
      <Vacant
        v-if="vacantStore.vacants.length > 0" 
        v-for="vacant in vacantStore.vacants"
        :vacant="vacant"
        :key="vacant._id"
      />
      <p v-else>No hay vacantes</p>
    </main>
  </LayoutDevJob>
</template>
