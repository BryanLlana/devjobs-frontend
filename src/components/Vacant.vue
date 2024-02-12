<script setup>
defineProps({
  vacant: {
    type: Object
  }
})
</script>

<template>
  <div class="vacante">
    <div class="caja">
      <h3>{{ vacant.company }}</h3>
      <p class="puesto">{{ vacant.title }}</p>
    </div>
    <div class="caja">
      <p class="etiqueta">Ubicación</p>
      <p class="nombre">{{ vacant.location }}</p>
    </div>
    <div class="caja">
      <p class="etiqueta">Contrato</p>
      <p class="nombre contrato">{{ vacant.contract }}</p>
    </div>
    <div class="caja centrar-vertical">
      <RouterLink :to="{ name: 'home' }" class="btn btn-verde">Más Info</RouterLink>
    </div>
  </div>
</template>