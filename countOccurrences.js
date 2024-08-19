// Count occurrences of words in QUERY within INPUT
function countOccurrences(input, query) {
    return query.map(word => input.filter(item => item === word).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const result = countOccurrences(INPUT, QUERY);
console.log(result); // Output: [1, 0, 2]
