class Solution{

    // Function to find the missing number in the array
    findMissing(array){

        // Calculate the expected sum of numbers from 1 to n
        // where n = array.length + 1 because one element is missing
        let consecutiveSum = ((array.length + 1)*((array.length + 1) + 1) / 2)

        // Variable to store the actual sum of array elements
        let sum = 0

        // Calculate the sum of all elements present in the array
        for(let element of array){
            sum += element
        }
        
        // Missing number = Expected Sum - Actual Sum
        return consecutiveSum - sum
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

// Execute once all input has been received
process.stdin.on('end', () => {
    
    // Convert input string into an array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Display the entered array
    console.log(`Entered array: [${enteredArray}]`)

    // Validate array length
    if(enteredArray.length < 2){
        console.log(`Empty or single element array cannot be processed.`)
        return
    }

    // Find and display the missing element
    console.log(`Missing element: ${new Solution().findMissing(enteredArray)}`)
})