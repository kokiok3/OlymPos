<template>
    <ManagementView>
        <template #title>
            매장 {{ modeText }}
        </template>

        <template #form>
            <Notivue v-slot="item">
                <Notification :item="item" />
            </Notivue>
            
            <div>
                <ManagementInput :type="'text'" :title="'매장 명'" :placeholder="'운영하고 계신 매장 이름을 입력해 주세요. (최소 1자 ~ 최대 64자)'" v-model="formCreateStore.storeName"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStoreName.validate" :error-msg="errorMsg[validateObj?.isErrorStoreName.type]"/>
            </div>
            <div>
                <ManagementInput :type="'text'" :title="'전화 번호'" :placeholder="'해당 매장의 전화번호를 입력해 주세요. (최소 11자 ~ 최대 16자)'" v-model="formCreateStore.storePhoneNumber"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStorePhoneNumber.validate" :error-msg="errorMsg[validateObj?.isErrorStorePhoneNumber.type]"/>
            </div>
            <div>
                <ManagementInput :type="'text'" :title="'주소'" :placeholder="'해당 매당의 주소를 입럭해 주세요. (최소 14자 ~ 최대 50자)'" v-model="formCreateStore.storeAddress"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStoreAddress.validate" :error-msg="errorMsg[validateObj?.isErrorStoreAddress.type]"/>
            </div>
            <div>
                <ManagementInput :type="'text'" :title="'사장님 성함'" :placeholder="'사장님 성함을 입력해 주세요. (최소 2자 ~ 최대 50자)'" v-model="formCreateStore.storeOwner"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStoreOwner.validate" :error-msg="errorMsg[validateObj?.isErrorStoreOwner.type]"/>
            </div>
            <div>
                <ManagementInput :type="'number'" :title="'테이블 개수'" :placeholder="'매장 내의 테이블 개수를 입력해 주세요.'" v-model.number="formCreateStore.storeTableCnt"></ManagementInput>
                <ValidateMessage v-if="validateObj?.isErrorStoreTableCnt.validate" :error-msg="errorMsg[validateObj?.isErrorStoreTableCnt.type]"/>
            </div>
        </template>

        <template #btnArea>
            <ManagementButton :btnColor="'white'" @click="cancelForm">취소</ManagementButton>
            <ManagementButton :btnColor="'blue'" @click="createStore">매장 {{ modeText }}</ManagementButton>
        </template>
    </ManagementView>
</template>

<script setup lang="ts">
import ManagementView from '@/components/management/ManagementView.vue';
import ManagementInput from '@/components/management/ManagementInput.vue';
import ManagementButton from '@/components/management/ManagementButton.vue';

import Joi from 'joi';
import ValidateMessage from '@/components/validates/ValidateMessage.vue';
import { newValidateObj2, initValidateObj2, errorMsg } from '@/validations/ValidateCommon';

import { ref, type Ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router'

import StoreApi from '@/apis/StoreApi';
import { type createStoreBody, type FormCreateStore } from '@/types/StoreTypes';
import { Notivue, Notification, push } from 'notivue';

const route = useRoute();

const modeText = ref('추가');
const setMode = ()=>{
    const isEditMode = Number(route.params.storeId);
    if(isEditMode){
        modeText.value = '수정';
    }
    else {
        alert('추가')
    }
}
setMode();


const schema = Joi.object({
    isErrorStoreName: Joi.string().min(1).max(64).required(),
    isErrorStorePhoneNumber: Joi.string().min(11).max(16).required(),
    isErrorStoreAddress: Joi.string().min(14).max(50).required(),
    isErrorStoreOwner: Joi.string().min(2).max(50).required(),
    isErrorStoreTableCnt: Joi.number().required(),
});
const validateObj = ref(newValidateObj2({
    isErrorStoreName: {
        validate: false,
        type: '',
        limit: '',
    },
    isErrorStorePhoneNumber: {
        validate: false,
        type: '',
        limit: '',
    },
    isErrorStoreAddress: {
        validate: false,
        type: '',
        limit: '',
    },
    isErrorStoreOwner: {
        validate: false,
        type: '',
        limit: '',
    },
    isErrorStoreTableCnt: {
        validate: false,
        type: '',
        limit: '',
    },
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

const formCreateStore: Ref<FormCreateStore> = ref({
    storeName: undefined,
    storePhoneNumber: undefined,
    storeAddress: undefined,
    storeOwner: undefined,
    storeTableCnt: undefined
});
const cancelForm = ()=>{
    router.push('/store');
}
const createStore = ()=>{
    initValidateObj2(validateObj.value);

    const validateResult = validate();
    if(validateResult.error){
        console.log(validateResult)

        validateResult.error.details.forEach(element => {
            const extractType = ()=>{
                const typeArr = element.type.split('.');
                return typeArr.length > 1 ? typeArr[typeArr.length-1] : element.type;
            }

            if(element?.context?.key){
                validateObj.value[element.context.key].validate = true;
                validateObj.value[element.context.key].limit = element.context.limit;
                validateObj.value[element.context.key].type = extractType();
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