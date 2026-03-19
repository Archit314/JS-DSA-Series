/**
 * Recursively find sum of first N natural numbers:
 * @param {number} lastNumber - End number to find sum of first n natural numbers
 * 
 * Time Complexity - O(n) where n = lastNumber
 */
class Solution{

    findSum(lastNumber){

        // Base Condition: Stop recursive call when lastNumber reaches 0
        if(lastNumber === 0) return 0

        // Recursive call: Each time reduce lastNumber by one
        return lastNumber + this.findSum(lastNumber - 1)
    }
}

let input = ''

// Collecting input data
process.stdin.on('data', data => {
    input += data
})

// Processing input data
process.stdin.on('end', () => {

    const endNumber = Number(input.trim())

    // Guard: Validating input number from invalid value
    if(isNaN(endNumber) || endNumber < 0){
        console.log(`Invalid number`)
        return
    }

    console.log(`Sum of first ${endNumber} natural numbers`)

    const result = new Solution().findSum(endNumber)

    console.log(`Total sum: ${result}`)
})