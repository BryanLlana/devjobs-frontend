<script setup>
import LayoutDevJob from '@/layouts/LayoutDevJob.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <LayoutDevJob
    name="Crea tu cuenta en DevJobs"
    tagline="Comienza a publicar tus vacantes gratis, solo debes crear una cuenta"
  >
    <form class="default-form">
      <div class="campo">
        <label for="name">Nombre</label>
        <input type="text" name="name" placeholder="Ejm: Bryan Joseph">
      </div>
      <div class="campo">
        <label for="email">E-mail</label>
        <input type="email" name="email" placeholder="Ejm: bryan@gmail.com">
      </div>
      <div class="campo">
        <label for="password">Password</label>
        <input type="password" name="password" >
      </div>
      <div class="campo">
        <label for="password2">Repetir Password</label>
        <input type="password" name="password2" >
      </div>
      <div class="campo acciones">
        <RouterLink
          :to="{ name: 'login' }"
        >Volver a Iniciar Sesión</RouterLink>
      </div>
      <div class="campo">
        <input type="submit" value="Crear Cuenta" class="btn btn-azul">
      </div>
    </form>
  </LayoutDevJob>
</template>