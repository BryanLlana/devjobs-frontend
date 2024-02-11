<script setup>
</script>

<template>
  <div class="vacante">
    <div class="caja">
      <h3>Facebook</h3>
      <p class="puesto">React Developer</p>
    </div>
    <div class="caja">
      <p class="etiqueta">Ubicación</p>
      <p class="nombre">Remoto</p>
    </div>
    <div class="caja">
      <p class="etiqueta">Contrato</p>
      <p class="nombre contrato">Tiempo Completo</p>
    </div>
    <div class="caja centrar-vertical">
      <RouterLink :to="{ name: 'home' }" class="btn btn-verde">Más Info</RouterLink>
    </div>
  </div>
</template>