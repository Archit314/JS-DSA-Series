
// This program finds the largest element in an array of numbers.
// It reads input from stdin, validates it, and outputs the result.

class Solution {

    // Method to find the largest element in the given array.
    // Returns null if the array is empty.
    getLargestElement(enteredArray){

        // Check if the array is empty
        if(enteredArray.length === 0) return null

        // Initialize largestElement with the first element of the array
        let largestElement = enteredArray[0]

        // Loop through the array starting from index 1 to find the maximum
        for(let i = 1; i < enteredArray.length; i++){
            // If the current element is greater than largestElement, update it
            if(enteredArray[i] > largestElement){
                largestElement = enteredArray[i]
            }
        }

        // Return the largest element found
        return largestElement
    }
}

let input = ''

// Collecting user input from stdin
process.stdin.on('data', data => {
    input += data
})

// Processing user input once stdin ends
process.stdin.on('end', () => {

    // Split the input string by spaces and convert each part to a number
    const userInput = input.split(' ').map(element => Number(element))
    console.log(`Entered Array: [${userInput}]`)

    // Check if any element is not a valid number (NaN)
    if(userInput.some(isNaN)) {
        console.log(`Invalid element present in an array`)
        return
    }

    // Create an instance of Solution and call getLargestElement
    const result = new Solution().getLargestElement(userInput)
    // If result is null (empty array), log appropriate message
    if(result === null){
        console.log(`Cannot find largest element in empty array`)
    }
    // Otherwise, log the largest element
    else{
        console.log(`Largest element inside an array is: ${result}`)
    }
})