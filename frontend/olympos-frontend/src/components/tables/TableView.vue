<template>
    <div>
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
import StoreApi from '@/apis/StoreApi';

const props = defineProps({
    colDef: Object,
    rowData: Object
})

const clickBtn = (btnType: string, storeId: number)=>{
    console.log('clickBtn', btnType);
    if(btnType === '수정'){
        handleEdit(storeId);
    }
    else {
        //todo 삭제 얼럿
        handleDelete(storeId);
    }
}

const handleEdit = (storeId: number)=>{
    
}
const handleDelete = (storeId: number)=>{
    const params = {
        store_uid: storeId
    }
    StoreApi.deleteStoreList(params)
    .then(res=>{
        console.log(res);
        //todo 목록 재조회
    })
}
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