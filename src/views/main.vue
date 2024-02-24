<template>
    <div class="result">
        <p class="banner">
            Выберите сотрудника, чтобы посмотреть его профиль
        </p>
    </div>
</template>


<style lang="scss" scoped>
@import '../assets/style/mixins';

.banner {
    @include main-text;
}

.result {
    display: flex;
    gap: 61px;
    align-items: center;
    justify-content: center;
    padding: 30px 30px 30px 21px;
    width: 100%;
}
</style>