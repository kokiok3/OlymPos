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
        try {
            return DefaultAxios.post('/admin-login', params)
            .then(res=>{
                if(res.data.code === 100 && res.data.result === "Success"){
                    const token = res.data.access_token;
                    sessionStorage.setItem('access_token', token);
                    // todo: 홈 화면으로 이동
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
export default LoginApi;