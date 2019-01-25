import { access } from "fs";

// export function substringKata(substring, string){
//     if (!substring) return -1;
//     return Array.from(string).filter((char) => char == substring).length;
// }

// export function substringKata(substring, string){
//     if (!substring || substring === '') return -1;
//     let count = 0;
//     let testString = string;
//     while (testString.includes(substring)){
//         count++;
//         const indexToCut = testString.indexOf(substring) + substring.length;
//         testString = testString.substring(indexToCut, string.length);
//     }
//     return count;
// }

export function substringKata(substring, string){ 
    if (!substring) return -1
    return Array.from(string).reduce((acc, _, i , arr) =>
           arr.slice(i, i + substring.length).join('') === substring
                ? acc + 1               
                : acc
            ,
    0)
}