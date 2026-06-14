class Solution{

    searchElement(arr){

        let low = 0;
        let high = arr.length - 1

        // Stores the minimum element found so far
        let minElement = Infinity

        while(low <= high){

            // Calculate middle index
            let mid = Math.floor( (low + high)/2 )

            // If left half is sorted,
            // then arr[low] is the smallest element in this half
            if(arr[low] <= arr[mid]){

                // Update minimum element
                minElement = Math.min(arr[low], minElement)

                // Search in the right half
                low = mid + 1
            }

            else{

                // Rotation point lies in the left half,
                // so arr[mid] can be a candidate for minimum
                minElement = Math.min(arr[mid], minElement)

                // Search in the left half
                high = mid - 1
            }
        }

        // Return the minimum element found
        return minElement
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Convert input string into an array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Ensure array is not empty
    if(enteredArray.length > 1){

        console.log(`Entered array: [${enteredArray}]`)

        // Find and print the minimum element
        console.log(`Minimum element present in the array: ${new Solution().searchElement(enteredArray)}`)
    }
    else {
        console.log(`Cannot process single element or empty array`)
    }

    return
})