import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormInput } from "../../Components";
import { AuthApiService, ValidateService } from "../../Services";

import './index.css';

export const ForgotPasswordFormContainer = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: ''
    });
    const [isValidate, setValidate] = useState({
        email: true
    });

    const onSend = (e) => {
        e.preventDefault();
        const isValid = {
            email: ValidateService.emailValidator(formData.email)
        };
        setValidate(isValid);
        if(isValid.email) {
            //I think reset-password-mail-sending api must be required
            AuthApiService.PasswordReset(formData.email)
                .then(res => {
                    navigate('/reset-password');
                })
                .catch(err => {});
        }
    }

    const onCancel = () => {
        navigate('/');
    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div className="email-form flex-column">
                <FormInput 
                    name="email"
                    type="text"
                    placeHolder="Enter your Email"
                    value={formData.email}
                    onChange={onChange}
                    error={isValidate.email}
                />
                <input 
                    className="send-button"
                    name="send"
                    type="submit"
                    value="Send"
                    onClick={onSend}
                />
                <input 
                    className="cancel-button"
                    name="cancel"
                    type="button"
                    value="Cancel"
                    onClick={onCancel}
                />
            </div>
        </>        
    )
}
