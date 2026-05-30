class Solution {

    // Function to move all zero elements to the end of the array
    // while maintaining the relative order of non-zero elements
    shiftZerosToEnd(array){
        
        // Pointer to traverse the entire array
        let current = 0

        // Pointer to track the position where the next non-zero element should be placed
        let previous = 0

        // Traverse the array
        while(current < array.length){

            // If current element is non-zero
            if(array[current] !== 0){

                // If previous pointer is currently pointing to a zero,
                // swap the non-zero element with that zero
                if(array[previous] === 0){
                    [array[previous], array[current]] = [array[current], array[previous]]
                }

                // Move both pointers forward after processing a non-zero element
                current ++
                previous ++
                continue
            }

            // If current element is zero, only move the current pointer
            current ++
        }
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
    console.log(`Entered Array: [${enteredArray}]`)

    // Process only if array contains more than one element
    if(enteredArray.length > 1){

        // Move all zeros to the end of the array
        new Solution().shiftZerosToEnd(enteredArray)

        // Display the resultant array
        console.log(`Resultant Array: [${enteredArray}]`)
        return
    }

    // Handle single element and empty array cases
    console.log(`Cannot process single element or empty array`)
    return
})