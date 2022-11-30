export const battleRoyale = (patrons) => {
    if (!Array.isArray(patrons)) {
        throw new Error('Input must be an array')
    }
    if (patrons.length === 0) {
        throw new Error('Input array must not be empty')
    }
    if (patrons.some((patron) => typeof patron !== 'string')) {
        throw new Error('All elements of the array must be strings')
    }
    const winnerIndex = getWinnerIndex(patrons.length)
    const winner = patrons[winnerIndex]
    return `${winner}-${winnerIndex}`
}

export const getWinnerIndex = (n) => {
    let i = 1
    let c = 0
    while (i <= n) {
        i *= 2;
        c++;
    }
    return (n - i / 2) * 2
}

export const getWinnerIndexBitwise = (n) => {
    let i = 0n
    let bn = BigInt(n)
    while (bn >> i > 1) {
        i++
    }
    return Number((bn - (1n << i)) * 2n)
}

export const getWinnerIndexSlow = (n) => {
    let items = Array.from({ length: n }, (_, i) => i)
    while (items.length > 2) {
        const mustSlice = items.length % 2 !== 0
        items = items.filter((_, index) => index % 2 === 0)
        if (mustSlice) {
            items = items.slice(1)
        }
    }  
    return items[0]
}
