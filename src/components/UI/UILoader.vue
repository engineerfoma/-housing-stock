<template>
    <span class="loader"></span>
</template>
<script setup>

</script>

<style lang="scss" scoped>
@import '../../assets/style/vars';

.loader {
    display: flex;
    margin: 0 auto;
    width: 25px;
    height: 25px;
    border: 5px solid $text;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotation .9s linear infinite;
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