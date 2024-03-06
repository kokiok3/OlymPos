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


interface ErrorValidation {
    validate: boolean;
    type: string;
    limit: string;
}
interface ValidateObj {
    [key: string]: ErrorValidation;
}
export const newValidateObj2 = (args: ValidateObj): ValidateObj=>{return args}
export const initValidateObj2 = (args: ValidateObj)=>{
    const validateObj = args;
    const validateObjKeysArr = Object.keys(validateObj);
    validateObjKeysArr.forEach((element)=>{
        validateObj[element].validate = false;
    });
}
export const errorType = ()=>{

}


interface ErrorMsg {
    [key: string]: string
}
export const errorMsg:ErrorMsg = {
    required: '필수 정보 입니다.',
    min: '최소 입력값을 맞춰주세요. ',
    max: '최대 입력값을 맞춰주세요.',
}