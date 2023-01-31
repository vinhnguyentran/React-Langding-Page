export const containsWhitespace = str => {
    return /^\s+$/.test(str);
}

export const validatePhoneNumber = number => {
    const result = false
    if(typeof number === 'number'){
        
        return true
    }else{
        return false
    }
}