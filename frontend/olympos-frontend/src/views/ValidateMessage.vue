<script setup lang="ts">

const validateMsg = defineProps({
    errorMsg: String
});
</script>

<template>
    <div class="validate-error">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>{{ validateMsg.errorMsg }}</span>
    </div>
</template>

<style scoped>
</style>