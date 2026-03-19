/**
 * Recursively prints a name 'frequency' number of times
 * @param {string} name - The name to repeat
 * @param {number} frequency - How many times to print
 * 
 * Time Complexity: O(n) where n = frequency
 * Space Complexity: O(n) due to recursive call stack
*/
class Solution{

    repeatName(name, frequency){

        // Base case: stop when frequency reaches 0 or below
        if(frequency === 0) return

        // Print name without new line
        process.stdout.write(name+' ')

        // Recursive Call: Reduce frequency by one each time
        this.repeatName(name, frequency - 1)
    }
}

let input = ''

// Collecting input data received from stdin
process.stdin.on('data', data => {
    input += data
})

// Processing input data
process.stdin.on('end', () => {

    const inputData = input.split('\n')

    // Parsing and validating the input values
    const userName = inputData[0].trim()
    console.log(`User name: ${userName}`)

    const repeatingFrequency = Number(inputData[1].trim())

    // Guard: Validating frequency with invalid values
    if(isNaN(repeatingFrequency) || repeatingFrequency < 0){
        console.log(`Invalid number`)
        return
    }
    console.log(`Repeating your name ${repeatingFrequency} times....`)

    new Solution().repeatName(userName, repeatingFrequency)
})