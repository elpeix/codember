
export const fixTwitter = (input) => {
    const users = transformUsers(input);
    let count = 0
    let lastUser = ''
    for (const user of users) {
        if (isValid(user)) {
            count += 1
            lastUser = user.usr
        }
    }
    return `${count}${lastUser}`;
}

const isValid = (user) => {
    const expectedKeys = [ 'usr', 'age', 'loc', 'psw', 'fll', 'eme' ]
    const keys = Object.keys(user);
    for (const expectedKey of expectedKeys) {
        if (keys.indexOf(expectedKey) == -1) {
            return false
        }
    }
    return true
}

export const transformUsers = (input) => {
    validateArgument(input)
    const arrUsers = input.split('\n\n')
    let result = []
    for (let user of arrUsers) {
        result.push(transformUser(user))
    }
    return result
}

export const transformUser = (input) => {
    validateArgument(input)
    const arrUser = input.split('\n').join(' ').split(' ')
    let obj = {}
    for (let entry of arrUser) {
        const [key, value] = entry.split(':');
        obj[key] = value
    }
    return obj
}

function validateArgument(input) {
    if (typeof input !== 'string' || input === '') {
        throw new Error('Invalid argument')
    }
}
