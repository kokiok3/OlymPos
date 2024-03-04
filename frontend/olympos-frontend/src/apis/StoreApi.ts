import DefaultAxios from '@/apis/DefaultApi';
import { type createStoreBody } from '@/types/StoreTypes';
import { ACCESS_TOKEN } from '@/functions/AccessToken';

const StoreApi = {
    createStore(params: createStoreBody){
        return DefaultAxios.post('/add-store', params, {
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
            // todo: console.log대신 오류 메세지 창 생성하기
            console.log('err: ', error.message);
        })
    }
}
export default StoreApi;