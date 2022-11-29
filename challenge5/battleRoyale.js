export const battleRoyale = (patrons) => {
    if (!Array.isArray(patrons)) {
        throw new Error('Input must be an array');
    }
    if (patrons.length === 0) {
        throw new Error('Input array must not be empty');
    }
    if (patrons.some((patron) => typeof patron !== 'string')) {
        throw new Error('All elements of the array must be strings');
    }
    let index = 1;
    while (index <= patrons.length) {
        index *= 2;
    };
    const winnerIndex = (patrons.length - index / 2) * 2;
    const winner = patrons[winnerIndex];
    return `${winner}-${winnerIndex}`;
}

export const battleRoyaleSlow = (patrons) => {
    if (!Array.isArray(patrons)) {
        throw new Error('Input must be an array');
    }
    if (patrons.length === 0) {
        throw new Error('Input array must not be empty');
    }
    if (patrons.some((patron) => typeof patron !== 'string')) {
        throw new Error('All elements of the array must be strings');
    }

    let items = Array.from({ length: patrons.length }, (_, i) => i);
    while (items.length > 2) {
        const mustSlice = items.length % 2 !== 0;
        items = items.filter((_, index) => index % 2 === 0);

        if (mustSlice) {
            items = items.slice(1);
        }
    }  
    return `>${patrons[items[0]]}-${items[0]}`;  
}