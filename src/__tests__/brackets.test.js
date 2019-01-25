// Challenge 1: Ensure that for every opening '(', '[', '{' there is a matching closing bracket of the same type
/* Challenge 2: Ensure that all brackets close in the correct order
    ex. This passes: '{()}'
        This doesn't pass: '{(})' */
// Challenge 3: Input string can contain non-bracket characters

import { bracketsKata } from '../modules/bracketsKata'

it ('returns whether string contains paired brackets', () => {
    expect(bracketsKata('{}')).toEqual(true)
    expect(bracketsKata('{{{}}')).toEqual(false)
    expect(bracketsKata('{}{}{')).toEqual(false)
    expect(bracketsKata('{')).toEqual(false)
    expect(bracketsKata('{}[()')).toEqual(false)
})

it ('returns whether string contains paired brackets in the correct order', () => {
    expect(bracketsKata('{[()]}')).toEqual(true)
    expect(bracketsKata('{(})')).toEqual(false)
    expect(bracketsKata('{')).toEqual(false)
    expect(bracketsKata('')).toEqual(false)
})