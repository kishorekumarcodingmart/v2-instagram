export const validateEmail = (email) => {
    /* eslint-disable */
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

export const validatePhone = (phone) => {
    /* eslint-disable */
    return phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
};

export const validateUserName = (userName) => {
    /* eslint-disable */
    return userName.match(/^[a-z0-9_\.]+$/);
};

export const validatePassword = (password) => {
    /* eslint-disable */
    return password.match(/^\w{8,15}$/);
};