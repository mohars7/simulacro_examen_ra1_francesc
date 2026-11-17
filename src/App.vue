<script setup>
import { RouterView} from 'vue-router';
</script>

<template>
  <nav id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/exercici1">Exercici 1</RouterLink>
    <RouterLink to="/exercici2">Exercici 2</RouterLink>
    <RouterLink to="/exercici3">Exercici 3</RouterLink>
  </nav>
  <div class="container">
    <RouterView/>
  </div>
</template>





