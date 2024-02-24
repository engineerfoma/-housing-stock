<template>
    <aside class="side-bar">
        <h2 class="side-bar__title">Поиск сотрудников</h2>
        <UIInput
            v-model:value="modelValue"
            @input="debouncedHandleInput"
        />
        <section class="side-bar__result">
            <h2
                class="side-bar__title"
                :class="{ 'side-bar__title_mb': users?.value?.length }"
            >Результаты</h2>
            <p
                class="side-bar__description"
                v-if="modelValue.length === 0"
            >Начните поиск</p>
            <ul
                v-if="users?.value?.length"
                class="side-bar__resilt_list list"
            >
                <li
                    v-for="user in users.value"
                    :key="user.id"
                >
                    <RouterLink class="list__el" :to="'/' + user.id">
                        <IconBase />
                        <div class="list__el_body">
                            <h3 class="list__el_body_title">{{ user.username }}</h3>
                            <p class="list__el_body_email">{{ user.email }}</p>
                        </div>
                    </RouterLink>
                </li>
            </ul>
            <UILoader v-else-if="isLoading.value" />
            <p
                class="side-bar__description"
                v-else-if="modelValue.length && !isLoading.value"
            > {{ error.value }}</p>

        </section>
    </aside>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import UIInput from './UI/UIInput.vue'
import UILoader from './UI/UILoader.vue'
import IconBase from './icons/IconBase.vue'
import debounce from '../utils/debounce'

const store = useStore()
const modelValue = ref('')

const searchInputModelAsync = (event) => {
    const target = event.target

    store.dispatch('searchUsers/GET_USERS', {
        value: target.value
    })
}

const debouncedHandleInput = debounce(searchInputModelAsync, 300)

const users = computed(() => {
    return store.getters['searchUsers/users']
})

const isLoading = computed(() => {
    return store.getters['searchUsers/isLoadingUsers']
})

const error = computed(() => {
    return store.getters['searchUsers/error']
})
</script>

<style lang="scss" scoped>
@import '../assets/style/mixins';
@import '../assets/style/vars';

.side-bar {
    padding: 27px 31px 27px 20px;
    border-right: 1px solid #DEDEDD;
    display: flex;
    flex-direction: column;
    gap: 22px;
    align-items: flex-start;

    &__title {
        @include header-aside;
        margin-bottom: 10px;

        &_mb {
            margin-bottom: 18px;
        }
    }

    &__description {
        @include main-text;
    }

    &__result {
        width: 100%;
    }
}

.list {
    display: flex;
    flex-direction: column;
    gap: 18px;

    &__el {
        width: 100%;
        height: 70px;
        box-shadow: 0px 0px 10px 0px #0000001A;
        background-color: #fff;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 70px auto;

        &:hover {
            cursor: pointer;

            .list__el_body {
                background-color: $border;
                border-radius: 0px 10px 10px 0px;
                box-shadow: 0px 0px 2px 0px #0000001A;
            }
        }

        &_img {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &_body {
            border-left: 1px solid $border;
            padding: 15px 15px 15px 18px;
            transition: background-color .5s ease, border-radius .5s ease;

            &_title {
                @include title-result;

            }

            &_email {
                @include main-text;
                margin-top: 5px;
            }

            &.active {
                background-color: $border;
            }
        }
    }
}
</style>