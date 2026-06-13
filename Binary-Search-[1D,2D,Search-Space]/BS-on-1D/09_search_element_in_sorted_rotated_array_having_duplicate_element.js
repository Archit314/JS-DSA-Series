class Solution{

    searchElement(arr, element){

        let low = 0;
        let high = arr.length - 1

        while(low <= high){

            // Calculate middle index
            let mid = Math.floor( (low + high)/2 )

            // Element found
            if(arr[mid] === element){
                return true
            }

            // If low, mid, and high all contain the same value,
            // we cannot determine which half is sorted.
            // Shrink the search space from both ends.
            else if(arr[low] === arr[mid] && arr[mid] === arr[high]){

                low++
                high--
            }

            // Check if left half is sorted
            else if(arr[low] <= arr[mid]){

                // Check if target lies within the sorted left half
                if(element >= arr[low] && element <= arr[mid]){
                    high = mid - 1
                }
                else{

                    // Search in right half
                    low = mid + 1
                }
            }

            // Right half is sorted
            else{

                // Check if target lies within the sorted right half
                if(element >= arr[mid] && element <= arr[high]){
                    low = mid + 1
                }
                else{

                    // Search in left half
                    high = mid - 1
                }
            }
        }

        // Element not found
        return false
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputData = input.split('\n')
    if(inputData.length === 2){

        // Convert input string into an array of numbers
        const enteredArray = inputData[0].split(' ').map(element => Number(element))

        // Ensure array is not empty
        if(enteredArray.length > 1){

            console.log(`Entered array: [${enteredArray}]`)

            // Convert search element to number
            const searchElement = Number(inputData[1])

            // Validate search element
            if(!isNaN(searchElement)){

                console.log(`Search element is: ${searchElement}`)

                // Search for the element and return true/false
                console.log(`Is element present in the array: ${new Solution().searchElement(enteredArray, searchElement)}`)
            }
            else{
                console.log(`The search element you entered is not a number.`)
            }
        }
        else {
            console.log(`Cannot process single element or empty array`)
        }
    }
    else {
        console.log(`Cannot process you input`)
    }

    return
})