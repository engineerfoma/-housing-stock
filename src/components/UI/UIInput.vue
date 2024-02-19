<template>
    <label class="label">
        <input
            class="input"
            :value="value"
            @input="inputHandler"
            placeholder="Введите запрос"
        >
    </label>
</template>

<script setup>
const emits = defineEmits(['update:value'])
defineProps({
    value: {
        type: String,
        default: null
    }
})

function inputHandler(event) {
    emits('update:value', event.target.value)
}

</script>

<style lang="scss" scoped>
.label {
    position: relative;
    width: 100%;
    border: 1.5px solid #E9ECEF;
    background-color: #fff;
    border-radius: 8px;
    padding: 14px 15px;
}

.input {
    border: none;

    &:focus-visible {
        outline: none;
    }
}
</style>