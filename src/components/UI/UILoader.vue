<template>
    <span class="loader"></span>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../assets/style/vars';

.loader {
    width: 35px;
    height: 35px;
    border: 5px solid $text;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>