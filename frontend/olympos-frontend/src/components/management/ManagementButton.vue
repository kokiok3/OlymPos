<template>
    <button class="button_management" :class="props.btnColor"><slot></slot></button>
</template>

<script setup lang="ts">
const props = defineProps({
    btnColor: String,
})
</script>

<style scoped>
.button_management {
    padding: 10px 50px;
    border-radius: 50px;
    font-weight: bold;
}
.blue {
    border: none;
    background-color: var(--main);
    color: var(--main-white);
}
.white {
    border: 2px solid var(--main);
    background-color: var(--main-white);
    color: var(--main);
}
</style>