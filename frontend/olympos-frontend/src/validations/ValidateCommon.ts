import { ref } from 'vue';

interface ValidateDefaultObj {
    [key: string]: boolean
}
export const newValidateObj = (args: ValidateDefaultObj): ValidateDefaultObj=>{return args}
export const initValidateObj = (args: ValidateDefaultObj)=>{
    const validateObj = args;
    const validateObjKeysArr = Object.keys(validateObj);
    validateObjKeysArr.forEach((element)=>{
        validateObj[element] = false;
    });
}

export const errorMsg = {
    required: '필수 정보 입니다.',
}