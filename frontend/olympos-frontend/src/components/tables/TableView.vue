<template>
    <div>
        <table>
            <thead>
                <tr id="theadRow">
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface ColDef {
    header: string;
    value: string;
    ratio: number;
}
interface RowData {
    [key: string]: string | number | boolean;
}

const tableHeader = ref<string[]>([]);

class CreateTable {
    colDef: ColDef[];
    rowData: RowData[];

    constructor(colDef: ColDef[], rowData: RowData[]) {
        this.colDef = colDef;
        this.rowData = rowData;
    }

    createColumn(){
        const theadRow = document.getElementById('theadRow')!;
        this.colDef.forEach(e=>{
            const createTh = document.createElement('th');
            createTh.setAttribute('width', (e.ratio*10).toString()+'px');
            createTh.innerText = e.header;
            theadRow.appendChild(createTh);
            
            tableHeader.value.push(e.value);
        });
    }
    createBody(){
        const tbody = document.getElementById('tbody')!;
        this.rowData.forEach((e, i)=>{
            const createRow = document.createElement('tr');
            tableHeader.value.forEach(ee=>{
                const createCell = document.createElement('td');
                const cellValue = ee === 'number'? i+1 : e[ee];
                createCell.innerHTML = cellValue as string;
                createRow.appendChild(createCell);
            });
            tbody.appendChild(createRow);
        });
    }
    setStyle(){
        const rowsInTbody = document.getElementById('tbody')?.childNodes as NodeListOf<HTMLElement>;
        rowsInTbody.forEach(e=>{
            e.style.cssText = 'height: 45px; border-bottom: 1px solid var(--main-gray-3);';
        });
    }
}

const testHeader = [
    { header: '번호', value: 'number', ratio: 1 },
    { header: '매장명', value: 'storeName', ratio: 5 },
    { header: '매장 전화번호', value: 'storeCall', ratio: 5 },
    { header: '주소', value: 'storeAddress', ratio: 5 },
    { header: '사장님 성함', value: 'owner', ratio: 5 },
    { header: '테이블 개수', value: 'tableCount', ratio: 5 },
    { header: '수정', value: 'edit', ratio: 2 },
    { header: '삭제', value: 'delete', ratio: 2 },
];
const testBody = [
    {
        storeName: '토끼분식',
        storeCall: '033-333-3333',
        storeAddress: '강원도 원주시 토끼동',
        owner: '정녕훈',
        tableCount: '30',
        edit: '<button>수정</button>',
        delete:' <button>삭제</button>',
    },
    {
        storeName: '음메레스토랑트',
        storeCall: '033-333-3333',
        storeAddress: '서울시 음메읍 음메리',
        owner: '통정소희',
        tableCount: '20',
        edit: '<button>수정</button>',
        delete:' <button>삭제</button>',
    },
    {
        storeName: '호호애견샵',
        storeCall: '033-333-3333',
        storeAddress: '성원아파트',
        owner: '정소현',
        tableCount: '5',
        edit: '<button>수정</button>',
        delete:' <button>삭제</button>',
    },
    {
        storeName: '호호애견샵',
        storeCall: '033-333-3333',
        storeAddress: '성원아파트',
        owner: '정소현',
        tableCount: '5',
        edit: '<button>수정</button>',
        delete:' <button>삭제</button>',
    },
];

onMounted(() => {
    const row1 = new CreateTable(testHeader, testBody);
    row1.createColumn();
    row1.createBody();
    row1.setStyle();
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
</style>