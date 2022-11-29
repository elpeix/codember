import { describe, expect, it } from "vitest";
import { battleRoyale } from "../../challenge5/battleRoyale";


describe('Battle Royale test', () => {
    it('should have a function called battleRoyale', () => {
        expect(typeof battleRoyale).toBe('function');
    })

    it('throws an error if the input is not an array', () => {
        expect(() => battleRoyale('hello')).toThrow();
        expect(() => battleRoyale(123)).toThrow();
        expect(() => battleRoyale({})).toThrow();
        expect(() => battleRoyale(true)).toThrow();
    })

    it('throws an error if the input array is empty', () => {
        expect(() => battleRoyale([])).toThrow();
    })

    it('throws an error if the input array contains non-string elements', () => {
        expect(() => battleRoyale(['Alice', 123])).toThrow();
        expect(() => battleRoyale(['Alice', {}])).toThrow();
        expect(() => battleRoyale(['Alice', true])).toThrow();
    })

    it('should return a string', () => {
        expect(typeof battleRoyale(['Alice'])).toBe('string');
    })

    it('should return Alice-0 when input array has one element', () => {
        expect(battleRoyale(['Alice'])).toBe('Alice-0');
    })

    it('should return Alice-0 when input array has two elements', () => {
        expect(battleRoyale(['Alice', 'Bob'])).toBe('Alice-0');
    })

    it('should return Charlie-2 when input array has three elements', () => {
        expect(battleRoyale(['Alice', 'Bob', 'Charlie'])).toBe('Charlie-2');
    })

    it('should return Alice-0 when input array has four elements', () => {
        expect(battleRoyale([
            'Alice', 'Bob', 'Charlie', 'Dave'
        ])).toBe('Alice-0');
    })

    it('should return the 4th when array has ten elements', () => {
        expect(battleRoyale([
            'Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 
            'Frank', 'Grace', 'Helen', 'Ivan', 'Judy'
        ])).toBe('Eve-4');
    })
    it('should return the 6th when array has eleven elements', () => {
        expect(battleRoyale([
            'Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 
            'Frank', 'Grace', 'Helen', 'Ivan', 'Judy', 'Karl'
        ])).toBe('Grace-6');
    })

    it('should return the 8th when array has twelve elements', () => {
        expect(battleRoyale([
            'Alice', 'Bob', 'Charlie', 'Dave', 'Eve',
            'Frank', 'Grace', 'Helen', 'Ivan', 'Judy', 'Karl', 'Linda'
        ])).toBe('Ivan-8');
    })

})