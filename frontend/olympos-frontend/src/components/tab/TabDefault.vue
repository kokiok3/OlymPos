<template>
    <div class="tab-container">
        <div v-for="(item, index) in tabList" :key="index" class="tab-item" :class="`tab-item${index}`" @click="handleTab">
            {{ item.group_name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';



defineProps(['tabList']);


const setStyleTab = (event: Event | null)=>{
    // 기존에 activeTabItem 클래스 삭제
    document.querySelector('.activeTabItem')?.classList.remove('activeTabItem');
    
    // 새로운 객체에 activeTabItem 클래스 부여
    if(event !== null && event.target !== null){
        (event.target as HTMLElement).classList.add('activeTabItem');
    }
    else {
        document.querySelector('.tab-item0')?.classList.add('activeTabItem');
    }
}
onMounted(()=>{
    setStyleTab(null);
});


const handleTab = (event: Event)=>{
    setStyleTab(event);

    // 카테고리 별 상품 목록 조회
}
</script>

<style scoped>
.activeTabItem {
    border-bottom: 3px solid var(--main);
    height: 32px;
}
.tab-container {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--main-gray-3);;
    font-size: 12px;
    cursor: pointer;
}
.tab-item {
    padding: 8px 16px;
}
</style>