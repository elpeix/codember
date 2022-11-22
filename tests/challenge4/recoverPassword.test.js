import { describe, expect, it } from "vitest";
import { isValidPassword, recoverPassword } from "../../challenge4/recoverPassword";

describe('Recover Password test', () => {

    it('should have a function called recoverPassword', () => {
        expect(typeof recoverPassword).toBe('function');
    });

    it('should have a function called isValidPassword', () => {
        expect(typeof isValidPassword).toBe('function');
    });

    it('shoult throw an error if the password is not a number', () => {
        expect(() => isValidPassword('12345')).toThrow();
    });

    it('should return a boolean', () => {  
        expect(typeof isValidPassword(12345)).toBe('boolean');
    });

    it('should return false if the password does not have 5 digits', () =>{
        expect(isValidPassword(1234)).toBe(false);
        expect(isValidPassword(123456)).toBe(false);
    }); 

    it('should return true if the password has the number 5 repeated twice and the numbers go in increasing order', () => {
        expect(isValidPassword(12345)).toBe(false);
        expect(isValidPassword(57775)).toBe(false);
        expect(isValidPassword(55678)).toBe(true);
        expect(isValidPassword(12555)).toBe(true);
        expect(isValidPassword(55555)).toBe(true);
        expect(isValidPassword(12345)).toBe(false);
        expect(isValidPassword(57775)).toBe(false);
        expect(isValidPassword(12355)).toBe(true);
    });

});