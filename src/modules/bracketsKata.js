export function bracketsKata(input) {
    const chars = Array.from(input)
    if (chars.length === 0 || chars.length % 2 !== 0) return false
    // if (input.length <= 1) return false;
    // let arr = [];
    // let [openCount, closeCount] = [0, 0];

    // Array.from(input).forEach((char) => {
    //     if (char == '{'){
    //         openCount ++;
    //     } else {
    //         closeCount ++;
    //     }
    // });

    // let openCount = chars.filter( char => char == '{').length
    // let closeCount = chars.filter( char => char == '}').length

    // let counts = chars.reduce( (acc, val) => {
    //     if (val === '{') return [acc[0]+1, acc[1]] 
    //     else if (val === '}') return [acc[0], acc[1]+1]
    //     else return acc 
    // }, [0, 0])
    // [openCounts, closeCounts]

    // let dictionary = {};
    // chars.forEach((char) => {
    //     if (!dictionary[char]){
    //         dictionary[char] = 1;
    //     } else {
    //         dictionary[char] ++;
    //     }
    // });

    // return (dictionary['{'] === dictionary['}'] &&
    // dictionary['('] === dictionary[')'] &&
    // dictionary['['] === dictionary[']']);

    const charArray = ['{', '}', '[', ']', '(', ')']
        .map( bracket => chars.filter( char => char === bracket).length)

    // return (charArray[0] === charArray[1]) &&
    //     (charArray[2] === charArray[3]) &&
    //     (charArray[4] === charArray[5])

    // return !([0, 2, 4].map( index => charArray[index] === charArray[index+1])
    //     .includes(false))

    // return [0, 2, 4].map( index => charArray[index] === charArray[index+1])
    //     .reduce((acc, val) => (val === false) ? false : acc, true)

    // return [0, 2, 4].reduce(
    //     (acc, val) => (charArray[val] === charArray[val+1]) ? acc: false,
    //     true
    // )


    // return ['{', '}', '[', ']', '(', ')'].reduce( (acc, val, i, arr) => 
    //     (i % 2 !== 0)
    //         ? acc
    //         : [arr[i], arr[i+1]].map(bracket => chars.filter( char => char === bracket).length)
    //             .reduce((acc, val, i, arr1) => arr1[0] === arr1[1], true),
    // true)


    /* 1. Count number of opening brackets (of certain type)
          a) Count number of opening parens, sq brackets
       2. Count number of closing brackets (of ceratin type)
          a) Count number of closing parens, sq brackets
       3. Iterate through dictionary, compare paired entries and see if they are equal.
       4. If equal => true
       5. else => false */

    // return counts[0] === counts[1]
    // return openCount == closeCount;


    /* ---------------------------------------------------- */

    // ASSUME: input = '[{()}]';

    const charMap = {
        '[': ']',
        ']': '[',
        '(': ')',
        ')': '(',
        '{': '}',
        '}': '{',
    }

    const cipher = string => Array.from(string).map( char => charMap[char]).join('')
    return (input === cipher(Array.from(input).reverse().join('')))

    // for (let i = 0; i < input.length / 2; i ++){
    //     if (input[i] !== charMap[Array.from(input).reverse()[i]]) {
    //         return false
    //     }
    // }


};