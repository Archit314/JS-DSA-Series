/**
 * Find factorial of an entered number
 * @param {number} enteredNumber - Number whose factorial to be find
 * 
 * Time complexity - O(n) where n = enteredNumber
 */
class Solution{

    findFactorial(enteredNumber){

        // Base Condition: Stop recursive call when enteredNumber reaches to 0
        if(enteredNumber <=1) return enteredNumber

        return enteredNumber * this.findFactorial(enteredNumber - 1)
    }
}

let input = ''

// Collecting user input
process.stdin.on('data', data => {
    input += data
})

// Processing user input
process.stdin.on('end', () => {

    const userInput = Number(input.trim())
    
    // Guard value: Validating user input, it should be a valid number:
    if(isNaN(userInput) || userInput < 0){
        console.log(`Invalid user input`)
        return
    }

    console.log(`User Input Number: ${userInput}`)

    const result = new Solution().findFactorial(userInput)
    console.log(`Factorial of the entered number: ${result}`)
})