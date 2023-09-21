<template>
    <button class="button-big"><slot></slot></button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.button-big {
    cursor: pointer;
    margin-top: 45px;
    padding: 13px 15px;
    width: -webkit-fill-available;
    height: 52px;
    font-size: 17px;
    border-radius: 5px;
    border: 0;
    background-color: var(--main);
    color: var(--main-white);
}
</style>