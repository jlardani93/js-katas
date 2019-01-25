import {fizzbuzz, fizzbuzzArray} from '../modules/fizzbuzz';

// if the number is 1, return 1 as a string

describe('FizzBuzz function', () => {
    it('should return 1 as a string', () => {
        expect(fizzbuzz(1)).toEqual("1");
        expect(fizzbuzz(2)).toEqual("2");
    })
    it('should return multiples of 3 as fizz', () => {
        expect(fizzbuzz(3)).toEqual("fizz");
        expect(fizzbuzz(6)).toEqual("fizz");
        expect(fizzbuzz(9)).toEqual("fizz");
    })
    it('should return multiples of 5 as "buzz"', () => {
        expect(fizzbuzz(5)).toEqual("buzz");
        expect(fizzbuzz(10)).toEqual("buzz"); 
        expect(fizzbuzz(25)).toEqual("buzz");
    })
    it('should return multiples of both 3 and 5 as "fizzbuzz"', () => {
        expect(fizzbuzz(15)).toEqual("fizzbuzz"); 
        expect(fizzbuzz(30)).toEqual("fizzbuzz");
        expect(fizzbuzz(45)).toEqual("fizzbuzz"); 
    })

});

describe('fizzbuzzArray', () => {
    it('should return a bunch of fizzbuzzes given an array of numbers', () => {
        expect(fizzbuzzArray(1)).toEqual(['1'])
        expect(fizzbuzzArray(2)).toEqual(['1', '2']);
        expect(fizzbuzzArray(3)).toEqual(["1", "2", "fizz"]);
    })
});

// quinngill.com
// 4 rules of simple design
// Expert Beginners -> Blog post (Rise of the Expert Beginners)
// Post by a guy from Amazon. Being the Averagest(?)
// Most devs don't know how good (OR BAD) they are.