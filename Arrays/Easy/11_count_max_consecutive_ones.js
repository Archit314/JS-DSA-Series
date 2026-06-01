class Solution {

    // Function to find the maximum number of consecutive 1's in the array
    findMaxConsecutiveOnes(array){

        // Stores the maximum consecutive count found so far
        let prevTotalConsecutiveZeros = 0;

        // Stores the current consecutive count of 1's
        let currentTotalConsecutiveZeros = 0

        // Traverse the entire array
        for(let i = 0; i < array.length; i++){

            // If current element is 1, increase the current consecutive count
            if(array[i] === 1){

                currentTotalConsecutiveZeros += 1
            }

            // If current element is 0, the current streak of 1's ends
            else if(array[i] === 0){

                // Update maximum count if current streak is larger
                if(prevTotalConsecutiveZeros < currentTotalConsecutiveZeros){
                    prevTotalConsecutiveZeros = currentTotalConsecutiveZeros
                }

                // Reset current streak count
                currentTotalConsecutiveZeros = 0
            }
        }

        // Return the larger value between the last streak and the recorded maximum streak
        return currentTotalConsecutiveZeros > prevTotalConsecutiveZeros? currentTotalConsecutiveZeros: prevTotalConsecutiveZeros
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

    // Process only if array contains more than one element
    if(enteredArray.length > 1){

        // Display the entered array
        console.log(`Entered Array: [${enteredArray}]`)

        // Find and display the maximum consecutive 1's count
        console.log(`Max consecutive ones in an entered array: ${new Solution().findMaxConsecutiveOnes(enteredArray)}`)
        return
    }

    // Handle empty array or single element array case
    console.log(`Cannot process single element or empty array`)
    return
})