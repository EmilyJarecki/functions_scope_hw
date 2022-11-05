// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1.3.What are the implications of the ability of a function to return a value?
//


// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    volume = num**3
    return volume
}
//console.log(calculateCube(5))



// // 3. isAVowel
function isAVowel(c) {
//     // YOUR CODE HERE
    if (c.length != 1) 
        return 0

    uc = c.toUpperCase()

    const vowelCheck = 
        uc === "A" ||
        uc === "E" ||
        uc === "I" ||
        uc === "O" ||
        uc === "U"

    return vowelCheck
}
console.log(isAVowel("a"))


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
//console.log(sumArray([1, 2, 3, 4, 5, 6]))


// 6.1 checkPrime

function checkPrime(num) {
    // YOUR CODE HERE
    for(let i=2; i<num; i++){
        if (num % i === 0) {
            return false
        }
    }
    return true
}

// 6.2 printPrimes

function printPrimes(num) {
    // YOUR CODE HERE
    for (let i=2; i<=num; i++){
        if (checkPrime(i) === true){
            console.log(i)
        }
    }
}
//printPrimes(97)




// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let word = ""
    for (let i=0; i<arr.length; i++){
        if (arr[i].length>word.length){
            word = arr[i]
        }
    }return word
}            

//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]))



// BONUS!

// 8. eulerFibo

function eulerFibo(num) {
//     // YOUR CODE HERE
//     addArr = [1, 2]
//     console.log(num)
//     for (let i=2; i<=addArr[i]; i++){
//         addArr[i]=addArr[i-1]+addArr[i-2]
//         console.log(addArr[18])
//     }
}
// eulerFibo(13)

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
    let position = arr.indexOf("needle")
    return `found the needle at position ${position}`

}
//console.log(findNeedle((['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])))

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
    sum = 0
    for (let i = 0; i<arr.length; i++){
        if (arr[i]>0)
        sum += arr[i]
    }
    return sum 
}
//console.log(sumPositive([1, -4, 7, 12]))

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