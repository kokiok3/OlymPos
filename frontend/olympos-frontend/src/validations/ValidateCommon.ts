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