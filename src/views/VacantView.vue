<script setup>
import { vacantApi } from '@/api/vacant';
import LayoutDevJob from '@/layouts/LayoutDevJob.vue';
import { inject, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const vacant = ref({})
const toast = inject('toast')

onMounted(async () => {
  try {
    const { data } = await vacantApi.getVacant(route.params.id)
    vacant.value = data
  } catch (error) {
    router.push({ name: 'home' })
    toast.open({
      message: error.response.data.message,
      type: 'error'
    })
  }
})
</script>

<template>
  <LayoutDevJob :name="vacant.title" :bar="true">
    <RouterLink :to="{ name: 'vacant-edit', params: { id: vacant._id } }" class="btn btn-azul editar-btn">Editar Vacante</RouterLink>
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