import axios from 'axios';
import { API_PREFIX } from '../Utils/config';

export const Login = (user) => {
    axios.post(`${API_PREFIX}v1/auth/login`, user)
        .then(res => {
            localStorage.setItem('accesstoken', res.data.access_token);
            localStorage.setItem('refreshtoken', res.data.refresh_token);
            alert('log in success!');
        })
        .catch(err => {
            alert(err.response.data.detail);
            throw(err);
        });
}

export const PasswordReset = (email, redirect_url="https://auth-qa.qencode.com/password-set") => {
    return axios.post(`${API_PREFIX}v1/auth/password-reset`, {email: email, redirect_url: redirect_url});
}

export const PasswordSet = (token = '', secret = '', password, confirmPassword) => {
    return axios.post(`${API_PREFIX}v1/auth/password-set`, {token, secret, password, password_confirm: confirmPassword})
        .then(res => {
            
        })
        .catch(err => {

        });
}
