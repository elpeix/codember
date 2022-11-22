function recoverPassword() {   
    let count = 0;
    let password_55 = '';
    for (let i = 11098; i <= 98123; i++) {
        if (isValidPassword(i)) {
            if (count === 55) {
                password_55 = i;
            }
            count = count + 1;
        }
    }
    return `${count}-${password_55}`;
}

function isValidPassword(password) {
    if (typeof password !== 'number') {
        throw new Error('The password must be a number');
    }
    if (password.toString().length !== 5) {
        return false;
    }
    const strPassword = password.toString();
    if (strPassword.indexOf('5') !== strPassword.lastIndexOf('5')) {
        if (strPassword.split('').sort().join('') === strPassword) {
            return true;
        }
    }
    return false;
}

export { recoverPassword, isValidPassword };