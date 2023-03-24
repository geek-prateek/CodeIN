import toast from 'react-hot-toast'
import { aunthenticate } from './helper';

export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    if(values.username){
        //check user exists
        const {status} = await aunthenticate(values.username);

        if(status!==200){
            errors.exist = toast.error('User does not exist')
        }
    }
    return errors;
}

export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password not matched..!")
    }
    return errors;
}

export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors; 
}

function passwordVerify(errors = {}, values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Please Enter your Password");
    }else if(values.password.includes(" ")){
        errors.password = toast.error("Invalid Password");
    }else if(values.password.length<7){
        errors.password = toast.error("Password must be greater than 7 characters");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special characters");
    }

    return errors;
}

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Please Enter your Username..');
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username');
    }
    return error;
}

function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error("Please Enter your Email");
    }
    else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email..!");
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid Email address..!")
    }

    return error;
}