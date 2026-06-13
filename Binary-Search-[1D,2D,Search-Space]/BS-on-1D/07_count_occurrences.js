class Solution{

    findFirstOccurance(arr, element){

        let low = 0
        let high = arr.length - 1

        // Stores index of first occurrence found so far
        let firstOccuranceIdx = -1

        while(low <= high){

            // Calculate middle index
            let mid = Math.floor( (low+high)/ 2 )

            if(arr[mid] === element){
                
                // Element found, store index
                firstOccuranceIdx = mid

                // Continue searching on left side
                // to find an earlier occurrence
                high = mid - 1
            }
            else if(arr[mid] > element){

                // Search in left half
                high = mid - 1
            }
            else{

                // Search in right half
                low = mid + 1
            }
        }

        return firstOccuranceIdx
    }

    lastOccurance(arr, element){

        let low = 0
        let high = arr.length - 1

        // Stores index of last occurrence found so far
        let lastOccurance = -1

        while(low <= high){

            // Calculate middle index
            let mid = Math.floor( (low+high)/2 )

            if(arr[mid] === element){

                // Element found, store index
                lastOccurance = mid

                // Continue searching on right side
                // to find a later occurrence
                low = mid + 1
            }
            else if(arr[mid] < element){

                // Search in right half
                low = mid + 1
            }
            else{

                // Search in left half
                high = mid - 1
            }
        }

        return lastOccurance
    }

    findOccurances(arr, element){

        // Find first occurrence
        let firstOcc = this.findFirstOccurance(arr, element)

        // If element does not exist, occurrence count is 0
        if(firstOcc === -1) return 0

        // Find last occurrence
        let lastOcc = this.lastOccurance(arr, element)

        // Total occurrences = last index - first index + 1
        return (lastOcc - firstOcc) + 1
    }
}

let input = ''

process.stdin.on(`data`, data => {

    // Read input from stdin
    input += data
})

process.stdin.on('end', () => {

    const inputData = input.split('\n')
    
    if(inputData.length === 2){

        // Convert input string into array of numbers
        const enteredArray = inputData[0].split(' ').map(element => Number(element))

        if(enteredArray.length > 1){

            console.log(`Entered Array: [${enteredArray}]`)

            // Convert search element to number
            const searchElement = Number(inputData[1])

            if(!isNaN(searchElement)){

                console.log(`Searching element: ${searchElement}`)

                // Find and print occurrence count
                console.log(`Total Occurance of ${searchElement} is: ${new Solution().findOccurances(enteredArray, searchElement)}`)
            }
        }
        else{

            console.log(`Cannot process single element or empty array`)
        }
    }
    else{

        console.log(`Cannot process your input`)
    }

    return
})