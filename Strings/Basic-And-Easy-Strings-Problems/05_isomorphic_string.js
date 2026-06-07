class Solution{

    isIsomorphicString(wordOne, wordSecond){

        // Stores mapping from wordOne -> wordSecond
        let hashMapOne = new Map()

        // Stores mapping from wordSecond -> wordOne
        let hashMapSecond = new Map()

        for(let i = 0; i < wordOne.length; i++){

            // If current character from wordOne was already mapped,
            // it must map to the same character in wordSecond
            if(hashMapOne.has(wordOne[i]) && hashMapOne.get(wordOne[i]) !== wordSecond[i]) return false

            // If current character from wordSecond was already mapped,
            // it must map back to the same character in wordOne
            if(hashMapSecond.has(wordSecond[i]) && hashMapSecond.get(wordSecond[i]) !== wordOne[i]) return false

            // Store mapping: wordOne character -> wordSecond character
            hashMapOne.set(wordOne[i], wordSecond[i])

            // Store reverse mapping: wordSecond character -> wordOne character
            hashMapSecond.set(wordSecond[i], wordOne[i])
        }

        // If no mapping conflicts are found, strings are isomorphic
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
    const userInput = input.split('\n')

    if(userInput.length === 2){

        const [firstWord, secondWord] = userInput
    
        // Isomorphic strings must have the same length
        if(firstWord.length === secondWord.length){
    
            console.log(`First word => ${firstWord} \nSecond Word => ${secondWord}`)
            console.log(`Is the two words isomorphic string: ${new Solution().isIsomorphicString(firstWord, secondWord)}`)
            return
        }
        
        console.log(`Both the words should be of same length`)
        return
    }

    console.log(`Can only process 2 words`)
    return
})