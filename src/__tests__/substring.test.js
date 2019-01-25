//Challenge: Given a string and substring, find how many times substring shows up in string

import { substringKata } from '../modules/substringKata'

it ('returns number of times substring shows up in string', () => {
    expect(substringKata('r', 'err')).toEqual(2)
    expect(substringKata('r', '')).toEqual(0)
    expect(substringKata( null, 'err')).toEqual(-1)
    expect(substringKata('el', 'hello el el')).toEqual(3)
})