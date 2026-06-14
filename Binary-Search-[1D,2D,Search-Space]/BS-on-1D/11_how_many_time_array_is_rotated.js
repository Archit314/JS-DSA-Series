class Solution{

    findRotationFrequency(arr){

        let low = 0
        let high = arr.length - 1

        // Stores the index of the minimum element found so far
        let minElement = 0

        while(low <= high){

            // Calculate middle index
            let mid = Math.floor( (low+high)/2 )

            // If left half is sorted,
            // then arr[low] is the minimum element in this half
            if(arr[low] < arr[mid]){

                // Update minimum element index if a smaller value is found
                minElement = arr[low] < arr[minElement]? low: minElement

                // Search in the right half
                low = mid + 1
            }
            else{

                // Rotation point lies in the left half,
                // so arr[mid] can be a candidate for minimum element
                minElement = arr[mid] < arr[minElement]? mid: minElement

                // Search in the left half
                high = mid - 1
            }
        }

        // Index of minimum element equals number of rotations
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

        // Find and print the rotation count
        console.log(`Rotation frequency: ${new Solution().findRotationFrequency(enteredArray)}`)
    }
    else {
        console.log(`Cannot process single element or empty array`)
    }

    return
})