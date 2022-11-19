const catchCybercriminals = (input) => {
    if (typeof input !== 'string' || input === '') {
        throw new Error('Invalid argument');
    }
    const asciiWords = input.split(' ');
    const words = asciiWords.map(asciiWord => {
        if (isNaN(asciiWord) || asciiWord < 0) {
            throw new Error('Invalid argument');
        }
        const asciiChars = asciiWord.match(/([4-9].{1}|1.{2})/g);
        if (asciiChars === null) {
            return '';
        }
        const chars = asciiChars.map(asciiChar => {
            if (asciiChar < 48 || asciiChar > 122) {
                return '';
            }
            return String.fromCharCode(asciiChar);
        });
        return chars.join('');
    });
    return words.join(' ');    
};

export { catchCybercriminals };