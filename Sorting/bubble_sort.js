/**
 * Bubble Sort Algorithm (Optimized)
 * 
 * Idea:
 * - Repeatedly compare adjacent elements
 * - Swap them if they are in the wrong order
 * - After each pass, the largest element "bubbles up" to the end
 * 
 * Optimization:
 * - Use a 'swapped' flag to detect if no swaps happened
 * - If no swaps → array is already sorted → stop early
 * 
 * Time Complexity:
 * - Best Case: O(n) (already sorted)
 * - Average: O(n²)
 * - Worst: O(n²)
 * 
 * Space Complexity: O(1) (in-place)
 */
class Solution {
    
    /**
     * Sorts the array using optimized Bubble Sort
     * @param {number[]} enteredArray - Array to be sorted
     */
    bubbleSort(enteredArray) {

        // Outer loop → controls number of passes
        for(let i = 0; i < enteredArray.length; i++){

            let swapped = false

            // Inner loop → compare adjacent elements
            // After each pass, last i elements are already sorted
            for(let j = 0; j < enteredArray.length - i - 1; j++){

                // Swap if current element is greater than next
                if(enteredArray[j] > enteredArray[j+1]){
                    [enteredArray[j], enteredArray[j+1]] = [enteredArray[j+1], enteredArray[j]]
                    swapped = true
                }
            }

            // If no swaps happened → array is already sorted
            if(!swapped) {
                console.log(`Array is sorted, no more sorting required`)
                break;
            }
        }

        console.log(`Array after bubble sort: [${enteredArray}]`)
    }
}

// Variable to collect input data
let input = ''

// Collecting user input:
process.stdin.on('data', data => {
    input += data
})


// Processing input after stream ends
process.stdin.on('end', () => {

    const enteredArray = input.split(' ').map(element => Number(element.trim()))
    console.log(`Entered Array: [${enteredArray}]`)

    // Edge case: single element array is already sorted
    if(enteredArray.length === 1){
        console.log(`Array already sorted`)
        return
    }

    new Solution().bubbleSort(enteredArray)
})