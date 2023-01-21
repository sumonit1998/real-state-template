<script setup>
import { RouterView } from 'vue-router'
import HeaderView from '@/layout/HeaderView.vue'
import FooterView from './layout/FooterView.vue';
</script>

<template>
  <HeaderView />

  <RouterView />

  <FooterView />
</template>
