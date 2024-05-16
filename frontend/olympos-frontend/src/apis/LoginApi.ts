import DefaultAxios from '@/apis/DefaultApi'
import { push } from 'notivue';
import { API_CODE } from '@/constants/ApiCodeConstant';

interface LoginValue {
    userId: string;
    userPw: string;
}

const LoginApi = {
    doLogin(args: LoginValue){
        const notification = push.promise({
            title: '로그인 중...',
            duration: undefined
        });

        const params = {
            user_id: args.userId,
            user_pwd: args.userPw
        }
        return DefaultAxios.post('/admin-login', params)
        .then(res=>{
            if(res.data.code === 100 && res.data.result === "Success"){
                return {accessToken: res.data.access_token};
            }
            else {
                throw new Error(res.data.code);
            }
        })
        .catch(error=>{
            notification.reject({
                title: API_CODE[error.message] || '로그인 실패',
                duration: undefined
            });
        });
    }
}
export default LoginApi;