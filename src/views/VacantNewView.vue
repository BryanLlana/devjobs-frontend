<script setup>
import LayoutDevJob from '@/layouts/LayoutDevJob.vue';
import { useVacantStore } from '@/stores/vacant'

const contracts = ['Freelance', 'Tiempo Completo', 'Medio Tiempo', 'Por Proyecto']
const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'jQuery', 'Node', 'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress']

const vacantStore = useVacantStore()

const selectSkill = e => {
  const skillExists = [...vacantStore.vacant.skills].some(skill => skill === e.target.textContent)
  if (skillExists) {
    vacantStore.vacant.skills.delete(e.target.textContent)
  } else {
    vacantStore.vacant.skills.add(e.target.textContent)
  }
}

const inputDescription = e => {
  vacantStore.vacant.description = e.target.innerHTML.toString().replace(/<!--block-->/g, '')
}
</script>

<template>
  <LayoutDevJob 
    name="Nueva Vacante"
    tagline="Llena el formulario y publica tu vacante"
  >
    <main class="contenedor">
      <form @submit="vacantStore.createVacant" class="default-form">
        <h3>Información General</h3>
        <p class="error-input" v-if="vacantStore.errorInput.title">{{ vacantStore.errorInput.title }}</p>
        <div class="campo">
          <label for="title">Título</label>
          <input v-model="vacantStore.vacant.title" type="text" id="title" placeholder="Ej: React Developer">
        </div>
        <p class="error-input" v-if="vacantStore.errorInput.company">{{ vacantStore.errorInput.company }}</p>
        <div class="campo">
          <label for="company">Empresa</label>
          <input v-model="vacantStore.vacant.company" type="text" id="company" placeholder="Ej: Facebook">
        </div>
        <p class="error-input" v-if="vacantStore.errorInput.location">{{ vacantStore.errorInput.location }}</p>
        <div class="campo">
          <label for="location">Ubicación</label>
          <input v-model="vacantStore.vacant.location" type="text" id="location" placeholder="Ej: México o Remoto">
        </div>
        <div class="campo">
          <label for="salary">Salario (USD)</label>
          <input v-model="vacantStore.vacant.salary" type="text" id="salary" placeholder="Ej: $500 USD">
        </div>
        <p class="error-input" v-if="vacantStore.errorInput.contract">{{ vacantStore.errorInput.contract }}</p>
        <div class="campo">
          <label for="contract">Contrato</label>
          <select v-model="vacantStore.vacant.contract" id="contract">
            <option value="" disabled selected>--Seleccione--</option>
            <option v-for="contract in contracts" :value="contract">{{ contract }}</option>
          </select>
        </div>

        <h3>Descripción del puesto</h3>
        <p class="error-input" v-if="vacantStore.errorInput.description">{{ vacantStore.errorInput.description }}</p>
        <div class="campo descripcion">
          <label>Descripción del puesto</label>
          <input type="hidden" id="x">
          <trix-editor @input="inputDescription" input="x"></trix-editor>
        </div>

        <h3>Conocimientos</h3>
        <p class="error-input" v-if="vacantStore.errorInput.skills">{{ vacantStore.errorInput.skills }}</p>
        <ul class="lista-conocimientos">
          <li
            @click="selectSkill"
            v-for="skill in skills"
            :class="[...vacantStore.vacant.skills].some(sk => sk === skill) ? 'activo' : ''"
          >{{ skill }}
          </li>
        </ul>

        <div class="campo centrar-horizontal">
          <input type="submit" value="Publicar" class="btn btn-azul">
        </div>
      </form>
    </main>
  </LayoutDevJob>
</template>