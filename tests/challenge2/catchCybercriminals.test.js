import { describe, it, expect } from 'vitest';
import { catchCybercriminals } from '../../challenge2/catchCybercriminals';

describe('Catch cybercriminals test', () => {
    it('has a function called catchCybercriminals', () => {
        expect(typeof catchCybercriminals).toBe('function');
    });

    it('throws an error if parameter is not a string', () => {
        expect(() => catchCybercriminals()).toThrow('Invalid argument');
    });

    it('throws an error if characters are not a natural numbers', () => {
        expect(() => catchCybercriminals("a")).toThrow('Invalid argument');
    });

    it('returns a if input is 97', () => {
        expect(catchCybercriminals('97')).toBe('a');
    });

    it('returns a if input is 48', () => {
        expect(catchCybercriminals('48')).toBe('0');
    });

    it('returns z if input is 122', () => {
        expect(catchCybercriminals('122')).toBe('z');
    });

    it('returns empty string if input is 47 or lower. Only basic lower characters', () => {
        expect(catchCybercriminals('47')).toBe('');
        expect(catchCybercriminals('12')).toBe('');
    });

    it('returns empty string if input is 123 or greather. Only basic lower characters', () => {
        expect(catchCybercriminals('123')).toBe('');
        expect(catchCybercriminals('332')).toBe('');
    });
    
    it('returns empty words', () => {
        expect(catchCybercriminals('28 35 17')).toBe('  ');
    });

    it('returns midu if input is 109105100117', () => {
        expect(catchCybercriminals('109105100117')).toBe('midu');
    });

    it('returns codember if input is 9911110010110998101114', () => {
        expect(catchCybercriminals('9911110010110998101114')).toBe('codember');
    });

    it('returns codember midu if input is 9911110010110998101114 109105100117', () => {
        expect(catchCybercriminals('9911110010110998101114 109105100117')).toBe('codember midu');
    });

    it('returns play tetris if input is 11210897121 116101116114105115', () => {
        expect(catchCybercriminals('11210897121 116101116114105115')).toBe('play tetris');
    });

    it('resolve 11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101', () => {
        console.log(catchCybercriminals('11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101'));
    });

});