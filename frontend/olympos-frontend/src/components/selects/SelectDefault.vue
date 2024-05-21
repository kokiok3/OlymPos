<template>
    <select :value="modelValue" @change="handleChange">
        <option v-for="item in optionList" :key="item.id" :value="item.id">{{ item.name }}</option>
    </select>
</template>

<script setup lang="ts">

defineProps(['optionList', 'modelValue']);
const emit = defineEmits(['update:modelValue', 'handleChange']);

const handleChange = (event: Event)=>{
    if(event.target !== null){
        emit('update:modelValue', (event.target as HTMLSelectElement).value);
        emit('handleChange');
    }
}


export interface SelectOptionList {
    id: number;
    name: String;
}
</script>

<style scoped>
select {
    border: none;
    font-size: 13px;
    outline: none;
}
</style>