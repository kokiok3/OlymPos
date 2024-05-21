<template>
    <button class="button_rectangle"><slot></slot></button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.button_rectangle {
    cursor: pointer;
    padding: 9px 14px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 5px;
    border: 0;
    background-color: var(--main-mute-1);
    color: var(--main-black);
    transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.button_rectangle:hover {
    background-color: var(--main-soft-1);
}
</style>