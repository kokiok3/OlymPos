import DefaultAxios from '@/apis/DefaultApi'
import router from '@/router';

interface SignUpInfo {
    user_id: string;
    user_pwd: string;
    name: string;
    phone: string;
    email: string;
}

const methods = {
    createAccount(args: SignUpInfo){
        return DefaultAxios.post('/signup', args)
        .then(res=>{
            if(res.data.code === 100 && res.data.result === "Success"){
                router.push({path: '/sign-up/complete'});
            }
            else {
                throw new Error(res.data.code);
            }
        })
        .catch(err=>{
            // todo: console.log대신 오류 메세지 창 생성하기
            console.log('err: ', err.message);
        })
    }
}
export default methods;