class Solution{

    checkStringRotation(strOne, strSecond){

        // Create a string by concatenating strOne with itself
        // All possible rotations of strOne will exist as substrings in this string
        let doubleStr = strOne + strOne
        
        // Check whether strSecond exists as a substring
        // If yes, strSecond is a rotation of strOne
        return doubleStr.includes(strSecond)
    }
}

let input = ''

process.stdin.on('data', data => {
    // Read input from stdin
    input += data
})

process.stdin.on('end', () => {

    // Split input into two strings
    const inputData = input.split('\n')

    const [wordOne, wordTwo] = inputData

    // Rotation is only possible if both strings have the same length
    if(wordOne.length === wordTwo.length){

        console.log(`First string: ${wordOne} and second string: ${wordTwo}`)
        console.log(`Is the string first rotation of string second: ${new Solution().checkStringRotation(wordOne, wordTwo)}`)
        return
    }

    console.log(`Both the words should be of same length`)
    return
})