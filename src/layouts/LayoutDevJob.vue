<script setup>
defineProps({
  bar: {
    type: Boolean,
    required: true
  },
  button: {
    type: Boolean,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="nombre-sitio contenedor">
    <h1>
      <a href="/">DevJobs</a>
    </h1>

    <div v-if="bar" class="buscador">
      <form>
        <input type="text" class="buscar">
        <input type="submit" class="Buscar">
      </form>
    </div>
  </div>

  <header class="site-header contenedor separador">
    <h2>{{ name }}</h2>
    <p v-if="tagline" class="tagline">{{ tagline }}</p>
    <RouterLink v-if="button" :to="{ name: 'home' }" class="btn btn-azul">Publicar Nueva Vacante</RouterLink>
  </header>

  <div class="contenido-principal contenedor">
    <slot />
  </div>
</template>