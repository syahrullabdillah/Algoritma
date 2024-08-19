// Reverse alphabet in a string with numbers at the end
function reverseAlphabetString(str) {
    // Separate letters and numbers
    const letters = str.match(/[A-Z]/gi).reverse().join('');
    const numbers = str.match(/\d+/g) ? str.match(/\d+/g).join('') : '';
    return letters + numbers;
}

const inputString = "NEGIE1";
const result = reverseAlphabetString(inputString);
console.log(result); // Output: "EIGEN1"
