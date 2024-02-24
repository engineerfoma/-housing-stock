<template>
    <div class="result">
        <section class="result__flex-wrap result__left-content">
            <IconBase class="result__img" />
        </section>
        <section class="result__flex-wrap result__right-content">
            <div class="result__details">
                <h2 class="result__details_title">{{ user?.name }}</h2>
                <p class="result__details_contacts">email: <span>{{ user?.email }}</span></p>
                <p class="result__details_contacts">phone: <span>{{ user?.phone }}</span></p>
            </div>
            <div class="result__description">
                <h2 class="result__description_title result__details_title">О себе</h2>
                <p class="result__description_text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam adipisci
                    explicabo eius doloremque laboriosam, cumque, commodi architecto consequuntur aliquid tenetur amet?
                    Necessitatibus beatae eligendi quia commodi mollitia iste et distinctio.
                </p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import IconBase from '../components/icons/IconBase.vue'
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue';
import router from '../router';
const store = useStore()
const route = useRoute()

onMounted(() => {
    if (!user.value) {
        router.push('/')
    }
})

const user = computed(() => {
    if (!store.getters['searchUsers/users'].value) {
        router.push('/')
        return
    }
    const findUser = store.getters['searchUsers/users'].value?.find(i => String(i.id) === route.params.id)
    if (!findUser) {
        router.push('/')
        return
    }

    store.commit({
        type: 'searchUsers/SET_USER_NAME',
        value: findUser?.name
    })

    return findUser
})
</script>

<style lang="scss" scoped>
@import '../assets/style/mixins';
@import '../assets/style/vars';

.result {
    display: flex;
    gap: 61px;
    align-items: flex-start;
    padding: 30px 30px 30px 21px;
    width: 100%;

    &__banner {
        @include main-text;
    }

    &__flex-wrap {
        flex: 1 1;
    }

    &__img {
        width: 100%;
        height: 100%;
        height: fit-content;
        border: 1px solid #E0E0E0;
    }

    &__details {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;

        &_title {
            @include header-aside;
            color: #000;
        }

        &_contacts {
            @include main-text;
            color: $grey;

            span {
                color: $text;
            }
        }
    }

    &__description {
        display: flex;
        flex-direction: column;
        gap: 25px;

        &_text {
            @include main-text;
        }
    }
}
</style>