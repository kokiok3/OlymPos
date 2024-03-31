<template>
    <div>
        <Notivue v-slot="item">
            <CustomAlertWithTwoButtons :item="item as NotivueItem<CustomAlertWithTwoButtonsProps>" />
        </Notivue>

        <table>
            <thead>
                <tr id="theadRow">
                    <th v-for="(item, index) in colDef" :key="index" :style="{width: item.ratio*10+'px'}">{{ item.header }}</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr v-for="(item, index) in rowData" :key="index">
                    <td v-for="header in colDef" :key="header.value">
                        <template v-if="header.value === 'number'">
                            {{ index + 1 }}
                        </template>

                        <component v-else-if="header.extend === true" :is="item[header.value].component" @click="clickBtn(item[header.value].slot, item.unique_store_info)">
                            <slot>{{item[header.value].slot}}</slot>
                        </component>
                        
                        <template v-else>
                            {{ item[header.value] }}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
import StoreApi from '@/apis/StoreApi';
import router from '@/router';
import { Notivue, push } from 'notivue';
import type { NotivueItem } from 'notivue';
import CustomAlertWithTwoButtons, { type CustomAlertWithTwoButtonsProps } from '@/components/alerts/CustomAlertWithTwoButtons.vue';

const props = defineProps({
    colDef: Object,
    rowData: Object
})
const emit = defineEmits(['refresh']);

const clickBtn = (btnType: string, storeId: number)=>{
    if(btnType === '수정'){
        handleEdit(storeId);
    }
    else{
        handleDelete(storeId);
    }
}

const goFormStore = (storeId: number)=>{
    router.push(`/store/form/${storeId}`);
}
const handleEdit = (storeId: number)=>{
    goFormStore(storeId);
}

const clearAlert = ()=>{
    push.clearAll();
}
const deleteStore = (storeId: number)=>{
    clearAlert();

    const params = {
        store_uid: storeId
    }
    StoreApi.deleteStoreList(params)
    .then(()=>{
        emit('refresh');
    });
}
const handleDelete = (storeId: number)=>{
    push.warning<CustomAlertWithTwoButtonsProps>({
        title: '삭제 안내',
        message: '매장 삭제 시 관련된 주문 관리, 주문 내역 및 매출 관리 데이터가 영구적으로 삭제됩니다. </br></br> 정말로 삭제하시겠습니까?',
        props: {
            icon: 'fa-solid fa-circle-exclamation',
            iconColor: 'var(--main-error-1)',
            btn1: '취소',
            btn2: '확인',
            btn1Function: clearAlert,
            btn2Function: deleteStore.bind(null, storeId),
        },
        duration: undefined
    });
}

onUnmounted(()=>{
    push.destroyAll();
});
</script>

<style scoped>
table {
    width: 100%;
    text-align: left;
    font-size: 12px;
    border-collapse: collapse;
}
tr {
    height: 47px;
}
tbody tr {
    height: 45px;
    border-bottom: 1px solid var(--main-gray-3);
}
tbody tr:hover {
    background-color: var(--main-mute-1);
}
</style>