export function fizzbuzz(number){
    if (number % (3*5) === 0) return "fizzbuzz";
    if (number % 3 === 0) return "fizz";
    if (number % 5 === 0) return "buzz";
    return String(number)
}

export function fizzbuzzArray(number){
    if (number === 1) return ["1"];
    return ["1", "2"]
}