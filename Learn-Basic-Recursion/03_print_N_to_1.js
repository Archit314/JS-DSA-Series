/**
 * Recursively print number N to 1:
 * @param {number} maxNumber - Max number to print
 * 
 * Time Complexity: 0(n) where n = frequency
 */
class Solution{

    printNumber(maxNumber){

        // Base condition: Stop recursive call when maxNumber reaches 0
        if(maxNumber === 0){
            return
        }

        process.stdout.write(String(maxNumber)+' ')

        // Recursive call: Reduce maxNumber by one
        this.printNumber(maxNumber - 1)
    }
}

let input = ''

// Collecting input data
process.stdin.on('data', data => {
    input += data
})

// Processing input data
process.stdin.on('end', () => {

    const totalNumberToPrint = Number(input.trim())
    console.log(`Total numbers to print: ${totalNumberToPrint}`)

    new Solution().printNumber(totalNumberToPrint)
})