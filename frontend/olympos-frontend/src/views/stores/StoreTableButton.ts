import { ref, onUnmounted, defineEmits, } from 'vue';
import StoreApi from '@/apis/StoreApi';
import router from '@/router';
import { Notivue, Notification, push } from 'notivue';
import CustomAlertWithTwoButtons, { type CustomAlertWithTwoButtonsProps } from '@/components/alerts/CustomAlertWithTwoButtons.vue';
import {useTableViewStore} from '@/stores/TableViewStore';
const tableViewStore = useTableViewStore();


export function useButton(btnType: string, storeItem: object, emit) {

    const goFormStore = (storeId: number)=>{
        router.push(`/store/form/${storeId}`);
    }
    const handleEdit = (storeId: number)=>{
        goFormStore(storeId);
    }
    
    const destroyAlert = ()=>{
        push.destroyAll();
        tableViewStore.setCustomAlertState(false);
    }
    const deleteStore = (storeId: number)=>{
        destroyAlert();
    
        const params = {
            store_uid: storeId
        }
        StoreApi.deleteStoreInfo(params)
        .then(()=>{
            push.success({
                title: '성공',
            });
            emit('refresh');
        })
        .catch(err=>{
            push.error({
                title: '에러',
                message: err.message || 'server error',
            });
        })
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
                btn1Function: destroyAlert,
                btn2Function: deleteStore.bind(null, storeId),
            },
            duration: undefined
        });
    }


    if(btnType === '수정'){
        handleEdit(storeItem.unique_store_info);
    }
    else{
        tableViewStore.setCustomAlertState(true);
        handleDelete(storeItem.unique_store_info);
    }
}