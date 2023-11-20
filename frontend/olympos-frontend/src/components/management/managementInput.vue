<template>
    <div>
        <div class="input_title">
            {{ props.title }}
        </div>
        <input type="text" :placeholder="dynamicPlaceholder" @focus="focus" @blur="blur">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    title: String,
    placeholder: String,
});

const dynamicPlaceholder = ref(props.placeholder);
const focus = ()=>{
    dynamicPlaceholder.value = '';
}
const blur = ()=>{
    dynamicPlaceholder.value = props.placeholder;
}
</script>

<style scoped>
.input_title {
    padding: 10px 0;
    font-weight: bold;
    font-size: 13px;
    border-bottom: 1px solid var(--main-gray-3);
}
input {
    width: -webkit-fill-available;
    border: none;
    outline: none;
}
input::placeholder {
    color: var(--main-gray-2);
}
</style>