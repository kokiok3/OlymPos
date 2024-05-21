<template>
    <div class="select-container">
        <slot name="name"></slot>
        <div class="divider"></div>
        <div class="select-area">
            <slot name="select"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.select-container {
    display: flex;
    align-items: center;
    padding: 9px 9px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid var(--main-gray-3);
    color: var(--main-black);
}
.divider {
    height: 100%;
    border-color: transparent;
    border-left: 1px solid var(--main-gray-3);
    display: inline-block;
    margin: 0 7px;
}
</style>