// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1.3.What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    volume = num**3
    return volume
}
//console.log(calculateCube(5))



// // 3. isAVowel //////////////////////////////Incomplete
function isAVowel(string) {}
//     // YOUR CODE HERE
//     let arr = []
//     let vowels = ["a", "e", "i", "o", "u"]
//     let word = string.toLowerCase()
//     arr.push(word)
//     let letter = arr[0].split("")
//     //console.log(fun.length)
//     if (letter.length == 1 && vowels.indexOf(letter[0])){
//         console.log("It's a character!")
//         console.log(letter[0])
//     }else{
//         console.log(string)
//         console.log("This is NOT a single character!")
//     }
//     //console.log(arr)

//     // if (arr.length == 1){
//     //     console.log("It's length one!")
// }

// isAVowel("b")
//console.log(isAVowel("A"))



// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    arr = []
    arr.push(word1.length, word2.length)
    return arr
}
//console.log(getTwoLengths("Hank", "Hippopopalous"))

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    sum = 0
    for (let i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum 
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))


// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};