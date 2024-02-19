<template>
    <header class="header">
        <h1 class="header__title">Жилфонд</h1>
        <h2 class="header__user">Пользователь</h2>
    </header>
</template>

<script setup>

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