import DefaultAxios from '@/apis/DefaultApi';
import { type FormStoreBody, type StoreInfo } from '@/types/StoreTypes';
import { ACCESS_TOKEN } from '@/functions/AccessToken';
import { push } from 'notivue';
import { API_CODE } from '@/constants/ApiCodeConstant';

const StoreApi = {
    createStore(params: FormStoreBody){
        return DefaultAxios.post('/add-store', params, {
            headers: {
                Authorization: ACCESS_TOKEN()
            }
        })
        .then(res=>{
            if(res.data.code === 100 && res.data.result === "Success"){
                return true;
            }
            else {
                throw new Error(res.data.code);
            }
        })
        .catch(error=>{
            push.error({
                title: '에러',
                message: API_CODE[error.message],
            });
        })
    },
    getStoreList(){
        return DefaultAxios.get('/get-my-stores', {
            headers: {
                Authorization: ACCESS_TOKEN()
            }
        })
        .then(res=>{
            if(res.data.code === 100 && res.data.result === "Success"){
                return res.data.stores;
    editStoreInfo(params: FormStoreBody){
        return DefaultAxios.post('/change-store-info', params, {
            headers: {
                Authorization: ACCESS_TOKEN()
            }
        })
        .then(res=>{
            if(res.data.code === 100 && res.data.result === "Success"){
                return;
            }
            else {
                throw new Error(res.data.code);
            }
        })
        .catch(error=>{
            throw new Error(API_CODE[error.message]);
        })
    },
    deleteStoreList(params: StoreInfo){
        return DefaultAxios.post('/delete-store', params, {
            headers: {
                Authorization: ACCESS_TOKEN()
            }
        })
        .then(res=>{
            if(res.data.code === 100 && res.data.result === "Success"){
                return true;
            }
            else {
                throw new Error(res.data.code);
            }
        })
        .catch(error=>{
            push.error({
                title: '에러',
                message: API_CODE[error.message],
            });
        })
    }
}
export default StoreApi;