// 1.1. What is the difference between a parameter and an argument?
//The parameter is the variable that is being defined when the function is declared. 
//The argument is the specific value that is going to be inputted into the function. 
//For example, "age" might be the parameter but 23 is the argument defined outside the function. 

// 1.2. Within a function, what is the difference between return and console.log?
//console.log prints out whatever is in the parenthesis, whether it be a function, a string, or number. It can be in whatever scope and is really helpful to see the output of their code or find any bugs. 
//return returns the data within a function after it is complete and stores it as a value. Anything after, the function will not acknowledge it.  

// 1.3.What are the implications of the ability of a function to return a value?
//It allows the program to call on the function, or action, several times if needed without having to repeat the fucntion's code. 


// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    volume = num**3
    return volume
}
console.log(calculateCube(5))



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
console.log(getTwoLengths("Hank", "Hippopopalous"))

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
printPrimes(97)




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

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]))



// BONUS!

// 8. eulerFibo

function eulerFibo(num) {
// YOUR CODE HERE
    addArr = [1, 2]
    for (let i=2; i<=num; i++){
        addArr[i] = addArr[i-1]+addArr[i-2]
        while (addArr[i]<=num){
            console.log(addArr[i])
            break
        }
    }
}

eulerFibo(30)



// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
    let position = arr.indexOf("needle")
    return `found the needle at position ${position}`

}
console.log(findNeedle((['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])))

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
console.log(sumPositive([1, -4, 7, 12]))

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
