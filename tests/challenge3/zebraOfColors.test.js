import { describe, expect, it } from "vitest";
import { zebraOfColors } from "../../challenge3/zebraOfColors";

describe('Zebra of Colors test', () => {
    it('should have a function called zebraOfColors', () => {
        expect(typeof zebraOfColors).toBe('function');
    });

    it('should expect an array as input', () => {
        expect(() => zebraOfColors('')).toThrowError('Invalid argument');
        expect(() => zebraOfColors(1)).toThrowError('Invalid argument');
        expect(() => zebraOfColors({})).toThrowError('Invalid argument');
        expect(() => zebraOfColors([])).not.toThrowError('Invalid argument');
    });

    it('should expect and string array as input', () => {
        expect(() => zebraOfColors([''])).not.toThrowError('Invalid argument');
        expect(() => zebraOfColors([1])).toThrowError('Invalid argument');
        expect(() => zebraOfColors([{}])).toThrowError('Invalid argument');
        expect(() => zebraOfColors([[], []])).toThrowError('Invalid argument');
    });

    it('should return a string', () => {
        expect(typeof zebraOfColors([])).toBe('string');
    });

    it('should return 4@blue', () => {
        expect(zebraOfColors(['red', 'blue', 'red', 'blue', 'green'])).toBe('4@blue');
    });

    it('should return 2@gray', () => {
        expect(zebraOfColors(['green', 'red', 'blue', 'gray'])).toBe('2@gray');
    });

    it('should return 1@blue', () => {
        expect(zebraOfColors(['blue', 'blue', 'blue', 'blue'])).toBe('1@blue');
    });

    it('should return 6@green', () => {
        expect(zebraOfColors(['red', 'green', 'red', 'green', 'red', 'green'])).toBe('6@green');
    });

    it('should return 4@red', () => {
        expect(zebraOfColors(['blue', 'red', 'blue', 'red', 'gray'])).toBe('4@red');
    });

    it('should return 3@red', () => {
        expect(zebraOfColors(['red', 'red', 'blue', 'red', 'red', 'red', 'green'])).toBe('3@red');
    });

    it('should return 6@green', () => {
        expect(zebraOfColors(['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'])).toBe('6@green');
    });

    
}); 