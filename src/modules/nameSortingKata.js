export function nameSortingKata(arr){
    return arr.sort((a, b) => a.age > b.age ? 1 : -1).map((p) => p.name)
}