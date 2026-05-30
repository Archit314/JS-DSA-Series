class Solution {

    // Function to reverse elements between the given low and high indices
    swapElement(array, low, high){

        // Initialize two pointers from both ends
        let leftPtr = low
        let rightPtr = high

        // Continue swapping until pointers cross each other
        while(leftPtr < rightPtr){

            // Swap elements at left and right pointers
            [array[leftPtr], array[rightPtr]] = [array[rightPtr], array[leftPtr]];

            // Move pointers towards the center
            leftPtr++
            rightPtr--
        }
    }

    // Function to rotate the array to the left by the given frequency
    // using the Reversal Algorithm
    rotateArrayElement(array, frequency){

        // Step First: Reverse elements from index 0 to frequency - 1
        this.swapElement(array, 0, frequency - 1)

        // Step second: Reverse elements from frequency to last index
        this.swapElement(array, frequency, array.length - 1)

        // Step Third: Reverse the entire array
        this.swapElement(array, 0, array.length - 1)
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

// Execute once all input has been received
process.stdin.on('end', () => {

    // Split input into separate lines
    const inputData = input.split('\n')

    // Convert first line into an array of numbers
    const enteredArray = inputData[0].split(' ').map(element => Number(element))

    // Validate array size
    if(enteredArray.length <= 1){
        console.log(`Cannot process this array. Array element should be more then 1.`)
        return
    }

    // Display entered array
    console.log(`Entered Array: [${enteredArray}]`)

    // Read rotation frequency from second line
    const frequency = Number(inputData[1])

    // Validate frequency
    if(frequency <= 0){
        console.log(`0 or not provided frequency cannot be handled for array element rotation`)
        return
    }

    // Display entered frequency
    console.log(`Entered Frequency: ${frequency}`)

    // Reduce unnecessary rotations using modulo operation
    let rotatingFrequency = Math.floor(frequency%enteredArray.length)

    // Perform rotation only when effective rotation is greater than zero
    if(rotatingFrequency > 0){
        new Solution().rotateArrayElement(enteredArray, rotatingFrequency)
    }

    // Display final rotated array
    console.log(`Resultant array after rotating ${frequency} times: [${enteredArray}]`)

    return
})