<script setup>
import { vacantApi } from '@/api/vacant';
import LayoutDevJob from '@/layouts/LayoutDevJob.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const vacant = ref({})

onMounted(async () => {
  const { data } = await vacantApi.getVacant(route.params.id)
  vacant.value = data
})
</script>

<template>
  <LayoutDevJob 
    name="Nueva Vacante"
    :bar="true"
  >
    <div class="contenido-superior vacante contenedor">
      <div class="caja">
        <p class="etiqueta">Empresa</p>
        <p class="nombre">{{ vacant.company }}</p>
      </div>
      <div class="caja">
        <p class="etiqueta">Ubicación</p>
        <p class="nombre">{{ vacant.location }}</p>
      </div>
      <div class="caja">
        <p class="etiqueta">Contrato</p>
        <p class="nombre">{{ vacant.contract }}</p>
      </div>
      <div class="caja">
        <p class="etiqueta">Salario</p>
        <p class="nombre">$ {{ vacant.salary }}</p>
      </div>
    </div>

    <div class="vacante-contenedor contenedor">
      <main class="contenido">
        <h2>Descripción del puesto</h2>
        <div v-html="vacant.description" class="vacante-descripcion"></div>
      </main>
      <aside class="sidebar">
        <h3>Conocimientos Deseados</h3>
        <ul class="skills">
          <li v-for="skill in vacant.skills">{{ skill }}</li>
        </ul>
      </aside>
    </div>
  </LayoutDevJob>
</template>