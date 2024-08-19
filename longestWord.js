// Find the longest word in a sentence
function longest(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}

const sentence = "Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu";
const result = longest(sentence);
console.log(result); // Output: "mengerjakan"
