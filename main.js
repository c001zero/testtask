const items = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 1, name: 'd' },
    { id: 3, name: 'f' }
];
/**
const result = [
    { id: 1, names: ['a', 'd'] },
    { id: 2, names: ['b'] },
    { id: 3, names: ['c', 'f'] },
]
*/
let result = [];
const uniqueIndex = [... new Set(items.map(item => item.id))];
for (let key of uniqueIndex) {
    result.push(
        {
            'id': key,
            'names': items.filter(item => item.id == key).map(x => x.name)
        }
    )
}
console.log(result);