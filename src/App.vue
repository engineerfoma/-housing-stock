<template>
  <div class="body">
    <HeaderComponet />
    <BodyComponent />
  </div>
</template>

<script setup>
import HeaderComponet from './components/HeaderComponet.vue'
import BodyComponent from './components/BodyComponent.vue'
</script>

<style scoped>
.body {
  padding: 50px 50px 58px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
