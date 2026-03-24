/**
 * Print fibonacci series
 * @param {number} nTerms - End value
 * @param {number} first - start value
 * @param {number} second - next value value
 */
class Solution{

    printFibonacciSeries(range, first = 0, second = 1){

        // Base condition: Stop recursive call when nTerms reaches 0
        if(range < 0) return

        console.log(first)

        return this.printFibonacciSeries(range - 1, second, first+second)
    }
}

let input = ''

// Collection user input
process.stdin.on('data', data => {
    input += data
})

// Processing user input:
process.stdin.on('end', () => {

    const nthNumber = Number(input.trim())

    // Validation check: Prevent form invalid input:
    if(isNaN(nthNumber) || nthNumber <= 0){
        console.log(`invalid number`)
        return
    }
    console.log(`Enter nth number for fibonacci: ${nthNumber}`)

    new Solution().printFibonacciSeries(nthNumber)
})