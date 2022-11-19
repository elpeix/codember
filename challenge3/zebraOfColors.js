export const zebraOfColors = (input) => {
    if (!Array.isArray(input)) {
        throw new Error('Invalid argument');
    }
    input.forEach((item) => {
        if (typeof item !== 'string') {
            throw new Error('Invalid argument');
        }
    });

    let serie = [];
    let maxSerie = [];
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < input.length; i++) {
        const color = input[i];
        if (serie.length === 0) {
            serie.push(color);
            count = 1;
        } else if (input[i - 1] === color) {
            count = 1;
        } else if (serie.length === 1 || input[i - 2] === color) {
            serie.push(color);
            count++;
        } else if (input[i - 2] !== color) {
            serie = [input[i - 1], color];
            count = 2;
        }
        if (count >= maxCount) {
            maxCount = count;
            maxSerie = serie;
        }
    }
    return `${maxCount}@${maxSerie[maxSerie.length - 1]}`;
}