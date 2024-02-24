<template>
    <main class="main">
        <SideBarComponent />
        <RouterView />
    </main>
</template>

<script setup>
import SideBarComponent from './SideBarComponent.vue'
</script>
<style lang="scss" scoped>
@import '../assets/style/vars';
@import '../assets/style/mixins';

.main {
    display: grid;
    grid-template-columns: 24% 76%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #0000001A;
    background-color: #FDFDFD;
    flex-grow: 1;
}
</style>