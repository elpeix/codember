import { describe, it, expect } from "vitest";
import { fixTwitter, transformUser, transformUsers } from "../../challenge1/fixTwitter";
import { users } from "../../challenge1/users";

describe("Fix twitter test", () => {

    it("has a function called transformUser", () => {
        expect(typeof transformUser).toBe('function')
    })

    it("throws an error if parameter is not a string", () => {
        expect(() => transformUser()).toThrow('Invalid argument')
    })

    it("throws an error if parameter is empty", () => {
        expect(() => transformUser('')).toThrow('Invalid argument')
    })

    it ('returns user object value', () => {
        const input = 'usr:@user age:19 loc:isle psw:aaa fll:222 eme:email@gmail.com'
        expect(transformUser(input)).toStrictEqual({
            usr: '@user',
            age: '19',
            loc: 'isle',
            psw: 'aaa',
            fll: '222',
            eme: 'email@gmail.com'
        })
    })


    it("has a function called transformUsers", () => {
        expect(typeof transformUsers).toBe('function')
    })

    it("throws an error if parameter is not a string", () => {
        expect(() => transformUsers()).toThrow('Invalid argument')
    })

    it("throws an error if parameter is empty", () => {
        expect(() => transformUsers('')).toThrow('Invalid argument')
    })

    it ('returns user object value', () => {
        const input = 'usr:@user age:19 loc:isle psw:aaa fll:222 eme:email@gmail.com'
        expect(transformUsers(input)).toStrictEqual([{
            usr: '@user',
            age: '19',
            loc: 'isle',
            psw: 'aaa',
            fll: '222',
            eme: 'email@gmail.com'
        }])
    })

    
    it("has a function called fixTwitter", () => {
        expect(typeof fixTwitter).toBe('function')
    })

    it("throws an error if parameter is not a string", () => {
        expect(() => fixTwitter()).toThrow('Invalid argument')
    })


    it("throws an error if parameter is empty", () => {
        expect(() => fixTwitter('')).toThrow('Invalid argument')
    })

    it("returns a string value", () => {
        const input = 'usr:@user age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com'
        expect(typeof fixTwitter(input)).toBe('string')
    })

    it ('returns 1@user value', () => {
        const input = 'usr:@user age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com'
        expect(fixTwitter(input)).toBe('1@user')
    })

    it('returns 3@aaa value', () => {
        const input = `
usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com

usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com
        `
        expect(fixTwitter(input)).toBe('3@itziar')
    })

    it ('returns solution', () => {
        const input = users
        const result = fixTwitter(input)
        expect(result).not.toBe('1@user')
    })
})