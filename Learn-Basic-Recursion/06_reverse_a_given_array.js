/**
 * Reverse an input array
 * @param {number[]} array - Input array
 * @param {number} leftPtr - Array starting index i.e., 0
 * @param {number} rightPtr - Array size - 1
 */
class Solution{

    reverseArray(array, leftPtr, rightPtr){

        // Base condition: Stop recursive call when left ptr and right ptr cross each other.
        if(leftPtr > rightPtr){
            return
        }

        // Logic: Swap elements.
        [array[leftPtr], array[rightPtr]] = [array[rightPtr], array[leftPtr]]
        this.reverseArray(array, leftPtr + 1, rightPtr - 1)
    }
}

// Getting input data:
let input = ''

// Process input data:
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputData = input.split('\n')

    const arraySize = Number(inputData[0].trim())
    // Input Validation: Validating array size it should be a valid +ve integer
    if(isNaN(arraySize) || arraySize <= 0){
        console.log(`[Error]: Invalid size of an array: ${arraySize}`)
        return
    }

    console.log(`Size of the array: ${arraySize}`)

    const enteredArray = inputData[1].split(' ').map(num => Number(num))
    // Input Validation: Size of array and input size of array should be equal
    if(enteredArray.length !== arraySize){
        console.log(`[Error]: Your Array length and size mismatch`)
        return
    }

    console.log(`Entered Array: [${enteredArray}]`)

    new Solution().reverseArray(enteredArray, 0, arraySize-1)
    console.log(`Reversed array: [${enteredArray}]`)
})