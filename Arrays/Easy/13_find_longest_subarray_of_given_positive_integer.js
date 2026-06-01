class Solution{

    findLongestSubArray(array, enteredSum){

        // Stores the current window sum
        let sum = 0

        // Left pointer of the sliding window
        let previousIncre = 0

        // Stores the length of the longest subarray found
        let largestSubArray = 0

        // Right pointer of the sliding window
        for(let i = 0; i < array.length; i++){

            // Expand the window by adding the current element
            sum += array[i]

            // Shrink the window from the left side
            // until the sum becomes less than or equal to the target sum
            while((previousIncre <= i) && (sum > enteredSum)){

                sum -= array[previousIncre]
                previousIncre ++
            }

            // Check if the current window sum matches the target sum
            if(sum === enteredSum){

                // Update the maximum length if the current window is larger
                if((i - previousIncre + 1) > largestSubArray){
                    largestSubArray = (i - previousIncre + 1)
                }
            }
        }

        // Return the length of the longest subarray
        return largestSubArray
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputData = input.split('\n')
    
    // Convert the first line of input into an array of numbers
    const enteredArray = inputData[0].split(' ').map(element => Number(element))

    // Process only if the array contains more than one element
    if(enteredArray.length > 1){

        console.log(`Entered array: [${enteredArray}]`)

        // Read the target sum from the second line of input
        const sumToSearch = Number(inputData[1])

        if(sumToSearch){

            // Find and print the length of the longest subarray
            // whose sum equals the target sum
            console.log(`Largest Sub Array: ${new Solution().findLongestSubArray(enteredArray, sumToSearch)}`)
            return 
        }
        else{
            console.log(`Cannot process array without a number to search in the array`)
            return
        }
    }

    console.log(`Cannot process single element or empty array`)
    return
})