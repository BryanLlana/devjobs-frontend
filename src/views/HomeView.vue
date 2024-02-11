<script setup>
import LayoutDevJob from '@/layouts/LayoutDevJob.vue'
import Vacant from '@/components/Vacant.vue'
</script>

<template>
  <LayoutDevJob :button="true" :bar="true" name="DevJobs" tagline="Encuentra y publica trabajos para desarrolladores web">
    <main class="lista-vacantes">
      <h2>Lista de Vacantes</h2>

      <Vacant />
    </main>
  </LayoutDevJob>
</template>
