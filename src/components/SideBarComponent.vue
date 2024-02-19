<template>
    <aside class="side-bar">
        <h2 class="side-bar__title">Поиск сотрудников</h2>
        <UIInput v-model:value="modelValue" />
        <section class="side-bar__result">
            <h2 class="side-bar__title">Результаты</h2>
            <p class="side-bar__description">Начните поиск</p>
            <ul class="side-bar__resilt_list list">
                <li class="list__el">
                    <!-- <img src="" alt=""> -->
                    <div class="list__el_img">img</div>
                    <div class="list__el_body">
                        <h3 class="list__el_body_title">123</h3>
                        <p class="list__el_body_email">123</p>
                    </div>
                </li>
            </ul>
            <UILoader />
        </section>
    </aside>
</template>

<script setup>
import UIInput from './UI/UIInput.vue'
import UILoader from './UI/UILoader.vue'
import axios from 'axios'
import { ref } from 'vue'

const modelValue = ref('')

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
    }

    &__description {
        margin-top: 10px;
        @include main-text;
    }

    &__result {
        width: 100%;
    }
}

.list {
    margin-top: 18px;
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
            transition: background-color .3s ease, border-radius .3s ease;

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