class Solution{

    // Function to rotate the array to the left by one position
    rotateArrayToLeft(array, frequency){

        // Store the first element temporarily
        let firstElement = array[0]

        // Shift all elements one position to the left
        for(let i = 1; i < array.length; i++){
            array[i-1] = array[i]
        }

        // Place the first element at the end of the array
        array[array.length - 1] = firstElement
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

// Execute after input stream ends
process.stdin.on('end', () => {

    // Convert input string into array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Display entered array
    console.log(`Entered Array: [${enteredArray}]`)

    // Process only if array has more than one element
    if(enteredArray.length > 1){

        // Number of left rotations
        const frequency = 1

        // Rotate array to the left
        new Solution().rotateArrayToLeft(enteredArray, frequency)

        // Display rotated array
        console.log(`Array after rotating to left side by ${frequency}: [${enteredArray}]`)
        return
    }

    // Handle empty or single element array
    console.log(`Cannot process empty array or single element array.`)
})