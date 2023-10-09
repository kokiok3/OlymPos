const required = '필수 정보 입니다.';
const ValidateSignUp = {
    firstName: '문자만 입력해주세요.',
    lastName: required,
    phone: required,
    email: required,
    id: '최소 5자리에서 최대 32자리를 입력해 주세요.',
    duplicatedId: '이미 해당 아이디가 존재합니다. 다른 아이디를 입력해주세요.',
    password: '최소 8자리에서 최대 32자리를 입력해 주세요.',
    passwordCheck: '최소 8자리에서 최대 32자리를 입력해 주세요.',
    isDiffrentPassword: '비밀번호를 다르게 입력했습니다.',
    term1: required,
    term2: required,
}

export default ValidateSignUp;