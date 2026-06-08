class Solution{

    checkStringAnagrams(strOne, strSecond){

        // HashMap to store character frequency differences
        let hashMap = {}

        // Increment frequency for characters from first string
        for(let i = 0; i < strOne.length; i++){

            hashMap[strOne[i]] = (hashMap[strOne[i]] || 0) + 1
        }

        // Decrement frequency for characters from second string
        for(let i = 0; i < strSecond.length; i++){

            hashMap[strSecond[i]] = (hashMap[strSecond[i]] || 0) - 1
        }

        // All frequencies should become zero for valid anagrams
        for(let ele in hashMap){

            // Non-zero frequency indicates mismatch
            if(hashMap[ele] !== 0) return false
        }

        return true
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

    // Anagrams must have the same length
    if(wordOne.length === wordTwo.length){

        console.log(`First string: ${wordOne} and second string: ${wordTwo}`)
        console.log(`Is the string anagrams: ${new Solution().checkStringAnagrams(wordOne, wordTwo)}`)
        return
    }

    console.log(`Both the words should be of same length`)
    return
})