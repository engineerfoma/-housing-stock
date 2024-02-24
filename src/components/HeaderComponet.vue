<template>
    <header class="header">
        <RouterLink to="/">
            <h1 class="header__title">Жилфонд</h1>
        </RouterLink>
        <h2 class="header__user">{{ userName }}</h2>
    </header>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue';

const store = useStore()
const userName = computed(() => store.getters['searchUsers/userName'].value)

</script>

<style lang="scss" scoped>
@import '../assets/style/mixins';

.header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 26px;

    &__title {
        @include logo;
    }

    &__user {
        @include user-title;
    }
}
</style>