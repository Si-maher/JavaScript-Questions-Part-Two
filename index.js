// 1) Create a function that returns the longest word


let textOne = 'To be or not to be, that is the question.'
function longestWord (str) {
    let words = str.split(' ')
    let longestWord = ''

    for (let word of words) {
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}
console.log(longestWord(textOne));

// Or using a for loop 

let textTwo = 'It was the best of days, it was the worst of days'
function longestWord1 (sentence) {
    let splitSentence = sentence.split(' ')
    let longestWord1 = ''
    for (let i = 0; i <splitSentence.length; i ++ ) {
        if(splitSentence[i].length > longestWord1.length ){
            longestWord1 = splitSentence[i]
        }
    }
return longestWord1
}

    console.log(longestWord1(textTwo));
    
// 2) Check for Arithmetic, Geometric or no patterns

function mathSequence (array) {
    let arithmetic = []
    let geometric = []

    for (let i = 1; i <array.length; i ++) {
        let arithNumber = array[i] - array[i - 1]
        arithmetic.push(arithNumber)

        let geoNumber = array[i] / array[i - 1]
        geometric.push(geoNumber)
    }
    console.log(`A: ${arithmetic}`);
    console.log(`B: ${geometric}`);
    
}
console.log(mathSequence([2,4,6]));
