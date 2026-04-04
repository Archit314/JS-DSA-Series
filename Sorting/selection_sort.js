/**
 * Selection Sort Algorithm
 * 
 * Idea:
 * - Divide array into two parts:
 *   1. Sorted part (left)
 *   2. Unsorted part (right)
 * 
 * - For each position:
 *   → Find the smallest element in the unsorted part
 *   → Swap it with the current position
 * 
 * Time Complexity: O(n²) (best, average, worst)
 * Space Complexity: O(1) (in-place sorting)
 */
class Solution{

    /**
     * Sorts the array using Selection Sort
     * @param {number[]} inputArray - Array to be sorted
     */ 
    sortArray(inputArray){

        // Traverse through the entire array
        for(let i = 0; i < inputArray.length; i++){

            // Assume current index has the smallest element
            let smallestElement = i

            // Find the actual smallest element in remaining unsorted array
            for(let j = i+1; j < inputArray.length; j++){
                if(inputArray[j] < inputArray[smallestElement]){
                    smallestElement = j
                }
            }

            // Swap only if a smaller element is found
            [inputArray[i], inputArray[smallestElement]] = [inputArray[smallestElement], inputArray[i]]
        }

        // Print the sorted array
        console.log(`Array after selection sort: [${inputArray}]`)
    }
}

let input = ''

//Collecting user input:
process.stdin.on('data', data => {
    input += data
})

// Processing user input:
process.stdin.on('end', () => {

    // Convert input string into array of numbers
    const enteredArray = input.split(' ').map(element => Number(element.trim()))
    console.log(`Entered array: ${enteredArray}`)

    // Create instance and sort the array
    new Solution().sortArray(enteredArray)
})