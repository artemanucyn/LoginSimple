export const emailValidator = (email) => {
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegexp.test(email);
};

export const passwordValidator = (password) => {
    const passwordLengthRegexp = /^.{0,7}$/;
    return !passwordLengthRegexp.test(password);
}

export const confirmPasswordValidator = (password, password1) => {
    const passwordLengthRegexp = /^.{0,7}$/;
    return !passwordLengthRegexp.test(password1) && password === password1;
}
