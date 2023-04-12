
export const gratesCelToFar = (cel) => {
    let f = (cel * 1.8) + 32
    return  f;
}

export const gratesFarToCel = (far)=> {
    let c = (far - 32) * (5/9);
    return  c;
}

