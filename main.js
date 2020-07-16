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
for (let i = 1; i <= uniqueIndex.length; i++) {
    result.push(
        {
            'id': i,
            'names': items.filter(item => item.id == i).map(x => x.name)
        }
    )
}
console.log(result);