<script setup lang="ts">
import { ref } from 'vue';

const inputLogin = defineProps({
    type: String,
    placeholder: String,
    modelValue: String,
});
const emit = defineEmits(['update:modelValue']);

const inputRef = ref<HTMLElement>();
const focusInput = ()=>{
    inputRef.value?.focus();
}

const isFocused = ref(false);
const changeFocusInput = (event)=>{
    isFocused.value = event.target.value.length > 0 ? true : false;
    emit('update:modelValue', event.target.value);
}
</script>

<template>
    <div class="input-wrapper" @click="focusInput">
        <input :type="inputLogin.type" ref="inputRef" @input="changeFocusInput" :value="inputLogin.modelValue">
        <span class="input-placeholder" :class="[{'focus-placeholder': modelValue || isFocused}]">{{ inputLogin.placeholder }}</span>
    </div>
</template>

<style scoped>
.input-wrapper {
    position: relative;
}
.input-wrapper .input-placeholder {
    position: absolute;
    top: 14px;
    left: 13px;
    color: var(--main-black-soft);
}
.input-wrapper input:focus + .input-placeholder,
.input-placeholder.focus-placeholder {
    padding: 0 5px;
    top: -10px;
    transition: 200ms;
    font-size: 12px;
    background-color: var(--main-white);
    color: var(--main);
}
.input-placeholder.focus-placeholder {
    color: var(--main-black-soft);
}
input {
    padding: 13px 15px;
    width: -webkit-fill-available;
    height: 52px;
    font-size: 17px;
    border-radius: 5px;
}
input:focus {
    outline-color: var(--main);
}
input {
    border: 1px solid var(--main-gray-3);
}
</style>