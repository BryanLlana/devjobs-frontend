<script setup>
import LayoutDevJob from '@/layouts/LayoutDevJob.vue';
const contracts = ['Freelance', 'Tiempo Completo', 'Medio Tiempo', 'Por Proyecto']
const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'jQuery', 'Node', 'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress']
</script>

<template>
  <LayoutDevJob 
    name="Nueva Vacante"
    tagline="Llena el formulario y publica tu vacante"
  >
    <main class="contenedor">
      <form class="default-form">
        <h3>Información General</h3>
        <div class="campo">
          <label for="title">Título</label>
          <input type="text" id="title" placeholder="Ej: React Developer">
        </div>
        <div class="campo">
          <label for="company">Empresa</label>
          <input type="text" id="company" placeholder="Ej: Facebook">
        </div>
        <div class="campo">
          <label for="location">Ubicación</label>
          <input type="text" id="location" placeholder="Ej: México o Remoto">
        </div>
        <div class="campo">
          <label for="salary">Salario (USD)</label>
          <input type="text" id="salary" placeholder="Ej: $500 USD">
        </div>
        <div class="campo">
          <label for="contract">Contrato</label>
          <select id="contract">
            <option value="" disabled selected>--Seleccione--</option>
            <option v-for="contract in contracts" :value="contract">{{ contract }}</option>
          </select>
        </div>

        <h3>Descripción del puesto</h3>
        <div class="campo descripcion">
          <label>Descripción del puesto</label>
          <input type="hidden" id="x">
          <trix-editor input="x"></trix-editor>
        </div>

        <h3>Conocimientos</h3>
        <ul class="lista-conocimientos">
          <li v-for="skill in skills">{{ skill }}</li>
        </ul>

        <div class="campo centrar-horizontal">
          <input type="submit" value="Publicar" class="btn btn-azul">
        </div>
      </form>
    </main>
  </LayoutDevJob>
</template>