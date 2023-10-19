<template>
    <button class="button_rectangle"><slot></slot></button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.button_rectangle {
    cursor: pointer;
    padding: 9px 22px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 5px;
    border: 0;
    background-color: var(--main-mute-1);
    color: var(--main-black);
}
</style>