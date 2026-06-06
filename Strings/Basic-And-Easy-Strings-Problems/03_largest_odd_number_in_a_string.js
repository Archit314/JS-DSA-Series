class Solution {

    findLargestOddNumber(userInput){

        // Traverse the string from right to left
        // to find the rightmost odd digit
        for(let idx = userInput.length - 1; idx >= 0; idx--){

            // Check whether the current digit is odd
            if(Number(userInput[idx]) % 2 !== 0){

                // Return the substring from the beginning
                // up to and including the rightmost odd digit
                return (userInput.slice(0, idx+1))
            }
        }

        // Return empty string if no odd digit exists
        return ''
    }
}

let input = ''

process.stdin.on('data', data => {
    // Collect input from stdin
    input += data
})

process.stdin.on('end', () => {

    // Remove leading and trailing spaces
    const enteredNumber = input.trim()

    // Validate that the input contains more than one character
    if(enteredNumber.length > 1){

        console.log(`Entered Number as string: ${enteredNumber}`)

        // Find and print the largest odd-number substring
        console.log(`${new Solution().findLargestOddNumber(enteredNumber)}`)
        return
    }

    console.log(`Cannot process single letter string`)
    return
})