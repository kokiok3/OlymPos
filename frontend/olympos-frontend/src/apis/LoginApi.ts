import DefaultAxios from '@/apis/DefaultApi'

interface LoginValue {
    userId: string;
    userPw: string;
}

const LoginApi = {
    doLogin(args: LoginValue){
        const params = {
            user_id: args.userId,
            user_pwd: args.userPw
        }
        return DefaultAxios.post('/admin-login', params)
        .then(res=>{
            if(res.data.code === 100 && res.data.result === "Success"){
                return res;
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
export default LoginApi;