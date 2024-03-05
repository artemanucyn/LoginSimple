import React, { useState } from "react";

import { FormInput } from "../../Components";
import { AuthApiService, ValidateService } from "../../Services";

import './index.css';

export const PasswordResetFormContainer = () => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [isValidate, setValidate] = useState({
        password: true,
        confirmPassword: true
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = {
            password: ValidateService.passwordValidator(formData.password),
            confirmPassword: ValidateService.confirmPasswordValidator(formData.password, formData.confirmPassword)
        };
        setValidate(isValid);
        if(isValid.email && isValid.password) {
            AuthApiService.PasswordSet(formData.password, formData.confirmPassword);
        }
    }

    const onChange = (e) => {
        const tempForm = {...formData, [e.target.name]: e.target.value};
        setFormData(tempForm);
        const isValid = {
            password: ValidateService.passwordValidator(tempForm.password) || tempForm.password === '',
            confirmPassword: ValidateService.confirmPasswordValidator(tempForm.password, tempForm.confirmPassword) || tempForm.confirmPassword === ''
        };
        setValidate(isValid);
    }

    return (
        <>
            <form className="password-reset-form flex-column" onSubmit={onSubmit}>
                <FormInput 
                    name="password"
                    type="password"
                    placeHolder="password"
                    classname="input-password"
                    value={formData.password}
                    onChange={onChange}
                    error={isValidate.password}
                />
                <FormInput 
                    name="confirmPassword"
                    type="password"
                    placeHolder="password"
                    classname="input-password"
                    value={formData.confirmPassword}
                    onChange={onChange}
                    error={isValidate.confirmPassword}
                />
                <input 
                    className="password-reset-button"
                    name="submit"
                    type="submit"
                    value="Reset Password"
                />
            </form>
        </>
    )
}
