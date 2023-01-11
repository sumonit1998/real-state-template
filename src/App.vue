<script setup>
import { RouterView } from 'vue-router'
import HeaderView from '@/layout/HeaderView.vue'
</script>

<template>
  <HeaderView />
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>
