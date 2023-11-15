import DefaultAxios from '@/apis/DefaultApi'
import router from '@/router';

interface SignUpInfo {
    user_id: string;
    user_pwd: string;
    name: string;
    phone: string;
    email: string;
}

const SignUpApi = {
    createAccount(args: SignUpInfo){
        try {
            DefaultAxios.post('/signup', args)
            .then(res=>{
                if(res.data.code === 100 && res.data.result === "Success"){
                    router.push({path: '/sign-up/complete'});
                }
                else {
                    throw new Error(res.data.code);
                }
            });
        } catch (error) {
            // todo: console.log대신 오류 메세지 창 생성하기
            console.log('err: ', error.message);
        }
    },
    checkIdDuplicate(args: SignUpInfo["user_id"]){
        try {
            // return DefaultAxios.get('/get-exist-user?user_id=test1009')
            return DefaultAxios.get('/get-exist-user', {
                params: {
                    user_id: args
                }
            })
            .then(res=>{
                if(res.data.code === 100 && res.data.result === "Success"){
                    return res.data.isExist;
                }
                else {
                    throw new Error(res.data.code);
                }
            });
        } catch (error) {
            // todo: console.log대신 오류 메세지 창 생성하기
            console.log('err: ', error.message);
        }
    }
}
export default SignUpApi;