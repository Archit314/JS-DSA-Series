
/**
 * Recursively print number from 1 to N:
 * @param {number} numToPrint - Max number till when to print
 * 
 * Time Complexity: 0(n) where n = numToPrint
 */
class Solution{

    printNumber(numToPrint){

        // Base case: Stop when numToPrint reaches to 0
        if(numToPrint === 0) {
            return
        }

        // Recursive call: Reduce numToPrint by one
        this.printNumber(numToPrint - 1)
        process.stdout.write(String(numToPrint)+' ')
    }
}

let input = ''

// Collecting input data received
process.stdin.on('data', data => {
    input += data
})

// Processing input data
process.stdin.on('end', () => {

    const totalNumbers = Number(input.trim())

    // Guard: Validate numToPrint with invalid value
    if(isNaN(totalNumbers) || totalNumbers < 0){
        console.log(`Invalid Number`)
        return
    }

    console.log(`Total numbers to print: ${totalNumbers}`)
    new Solution().printNumber(totalNumbers)
})