import { nameSortingKata } from '../modules/nameSortingKata'

it ('returns an array of names sorted by age order', () => {
    const person = (name, age) => ({name, age})
    const people1 = [
        person('Justin', 25),
        person('Ernest', 24),
        person('Baby Boy', 10),
        person('Christina', 22),
    ]
    const people2 = new Array(100).fill()
        .map((val, i) => ({name: `${i}`, age: i}))
        .reverse()
    expect(nameSortingKata(people1)).toEqual([
        'Baby Boy', 'Christina', 'Ernest', 'Justin'
    ])
    expect(nameSortingKata(people2)).toEqual(Object.keys(people2))
})