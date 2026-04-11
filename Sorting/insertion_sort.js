
/**
 * Class containing sorting algorithm implementations.
 */
class Solution {

    /**
     * Sorts an array in ascending order using the Insertion Sort algorithm.
     * This algorithm builds the sorted array one element at a time by inserting each element into its correct position.
     * Time Complexity: O(n^2) in worst case, O(n) in best case (nearly sorted).
     * Space Complexity: O(1) as it sorts in-place.
     * @param {number[]} enteredArray - The array to be sorted.
     */
    sortArray(enteredArray){

        // Iterate through the array starting from the second element
        for(let i = 1; i < enteredArray.length; i++){

            // Store the current element as the key to be inserted
            let key = enteredArray[i]
            // Initialize the index for comparison with the previous element
            let correctPlaceIndex = i-1

            // Shift elements greater than the key to the right to make space for insertion
            while(correctPlaceIndex >= 0 && enteredArray[correctPlaceIndex] > key){

                enteredArray[correctPlaceIndex + 1] = enteredArray[correctPlaceIndex]
                correctPlaceIndex -= 1
            }

            // Insert the key at its correct position
            enteredArray[correctPlaceIndex + 1] = key
        }

        // Log the sorted array for verification
        console.log(`Entered array after sorting: ${enteredArray}`)
    }
}

// Global variable to accumulate input data from standard input
let input = ''

// Event listener to collect input data in chunks as it arrives
process.stdin.on('data', data => {
    input += data
})

// Event listener to process the complete input once the stream ends
process.stdin.on('end', () => {

    // Parse the input string into an array of numbers: split by spaces, trim whitespace, and convert to numeric values
    const userInput = input.split(' ').map(element => Number(element.trim()))
    // Log the original array for reference
    console.log(`Entered Array: ${userInput}`)

    // Instantiate the Solution class and invoke the sortArray method to sort the input array
    new Solution().sortArray(userInput)
})