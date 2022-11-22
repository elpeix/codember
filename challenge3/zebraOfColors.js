export const zebraOfColors = (colors) => {
    if (!Array.isArray(colors)) {
        throw new Error('Invalid argument');
    }
    colors.forEach((color) => {
        if (typeof color !== 'string') {
            throw new Error('Invalid argument');
        }
    });

    let serie = [];
    let maxSerie = [];
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        if (serie.length === 0) {
            serie.push(color);
            count = 1;
        } else if (colors[i - 1] === color) {
            count = 1;
        } else if (serie.length === 1 || colors[i - 2] === color) {
            serie.push(color);
            count++;
        } else if (colors[i - 2] !== color) {
            serie = [colors[i - 1], color];
            count = 2;
        }
        if (count >= maxCount) {
            maxCount = count;
            maxSerie = serie;
        }
    }
    return `${maxCount}@${maxSerie.slice(-1)}`;
}