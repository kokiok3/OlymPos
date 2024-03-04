import DefaultAxios from '@/apis/DefaultApi';
import { type createStoreBody } from '@/types/StoreTypes';
import { ACCESS_TOKEN } from '@/functions/AccessToken';
import { push } from 'notivue';
import { API_CODE } from '@/constants/ApiCodeConstant';

const StoreApi = {
    createStore(params: createStoreBody){
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
    }
}
export default StoreApi;