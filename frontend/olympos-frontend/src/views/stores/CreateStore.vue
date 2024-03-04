<template>
    <ManagementView>
        <template #title>
            매장 추가
        </template>

        <template #form>
            <Notivue v-slot="item">
                <Notification :item="item" />
            </Notivue>
            
            <div>
                <ManagementInput :title="'매장 명'" :placeholder="'운영하고 계신 매장 이름을 입력해 주세요.'" v-model="formCreateStore.storeName"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStoreName" :error-msg="errorMsg.required"/>
            </div>
            <div>
                <ManagementInput :title="'전화 번호'" :placeholder="'해당 매장의 전화번호를 입력해 주세요.'" v-model="formCreateStore.storePhoneNumber"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStorePhoneNumber" :error-msg="errorMsg.required"/>
            </div>
            <div>
                <ManagementInput :title="'주소'" :placeholder="'해당 매당의 주소를 입럭해 주세요.'" v-model="formCreateStore.storeAddress"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStoreAddress" :error-msg="errorMsg.required"/>
            </div>
            <div>
                <ManagementInput :title="'사장님 성함'" :placeholder="'사장님 성함을 입력해 주세요.'" v-model="formCreateStore.storeOwner"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStoreOwner" :error-msg="errorMsg.required"/>
            </div>
            <div>
                <ManagementInput :title="'테이블 개수'" :placeholder="'매장 내의 테이블 개수를 입력해 주세요.'" v-model="formCreateStore.storeTableCnt"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStoreTableCnt" :error-msg="errorMsg.required"/>
            </div>
        </template>

        <template #btnArea>
            <ManagementButton :btnColor="'white'" @click="cancelCreate">취소</ManagementButton>
            <ManagementButton :btnColor="'blue'" @click="createStore">매장 등록</ManagementButton>
        </template>
    </ManagementView>
</template>

<script setup lang="ts">
import ManagementView from '@/components/management/ManagementView.vue';
import ManagementInput from '@/components/management/ManagementInput.vue';
import ManagementButton from '@/components/management/ManagementButton.vue';

import Joi from 'joi';
import ValidateMessage from '@/components/validates/ValidateMessage.vue';
import { newValidateObj, initValidateObj, errorMsg } from '@/validations/ValidateCommon';

import { ref, type Ref } from 'vue';
import router from '@/router';

import StoreApi from '@/apis/StoreApi';
import { type createStoreBody } from '@/types/StoreTypes';
import { Notivue, Notification, push } from 'notivue';

const schema = Joi.object({
    isErrorStoreName: Joi.string().required(),
    isErrorStorePhoneNumber: Joi.string().required(),
    isErrorStoreAddress: Joi.string().required(),
    isErrorStoreOwner: Joi.string().required(),
    isErrorStoreTableCnt: Joi.string().required(),
});
const validateObj = ref(newValidateObj({
    isErrorStoreName: false,
    isErrorStorePhoneNumber: false,
    isErrorStoreAddress: false,
    isErrorStoreOwner: false,
    isErrorStoreTableCnt: false,
}));
const validate = ()=>{
    return schema.validate(
        {
            isErrorStoreName: formCreateStore.value.storeName,
            isErrorStorePhoneNumber: formCreateStore.value.storePhoneNumber,
            isErrorStoreAddress: formCreateStore.value.storeAddress,
            isErrorStoreOwner: formCreateStore.value.storeOwner,
            isErrorStoreTableCnt: formCreateStore.value.storeTableCnt,
        },
        {abortEarly: false}
    );
}
interface FormCreateStore {
    storeName: string | undefined;
    storePhoneNumber: string | undefined;
    storeAddress: string | undefined;
    storeOwner: string | undefined;
    storeTableCnt: string | undefined;
}
const formCreateStore: Ref<FormCreateStore> = ref({
    storeName: undefined,
    storePhoneNumber: undefined,
    storeAddress: undefined,
    storeOwner: undefined,
    storeTableCnt: undefined
});
const cancelCreate = ()=>{
    router.push('/store');
}
const createStore = ()=>{
    initValidateObj(validateObj.value);

    const validateResult = validate();
    if(validateResult.error){
        console.log(validateResult)

        validateResult.error.details.forEach(element => {
            if(element?.context?.key){
                validateObj.value[element.context.key] = true;
            }
        });
    }
    else {
        const params: createStoreBody = {
            name: formCreateStore.value.storeName as string,
            tel_num: formCreateStore.value.storePhoneNumber as string,
            address: formCreateStore.value.storeAddress as string,
            owner: formCreateStore.value.storeOwner as string,
            count: Number(formCreateStore.value.storeTableCnt) as number,
        }

        StoreApi.createStore(params)
        .then((res)=>{
            if(res){
                push.success({
                    message: '성공',
                    onAutoClear() {
                        router.push('/store');
                    },
                    onManualClear() {
                        router.push('/store');
                    }
                });
            }
        });
    }
}
</script>

<style scoped>
</style>