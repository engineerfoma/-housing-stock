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
// import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watch, onUpdated, computed } from 'vue';

const store = useStore()
// const route = useRoute()
// const router = useRouter()

// onMounted(()=> {
//     console.log(userName.value)

// })

// onUpdated(() => {
//     console.log(userName.value)
//     console.log(route.path)
// })

// const userName = ref('')
const userName = computed(() => store.getters['searchUsers/userName'].value)

// watch(route, () => {
//     userName.value = store.getters['searchUsers/userName'].value
// })

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