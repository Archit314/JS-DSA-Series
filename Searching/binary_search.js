class Solution {

    binarySearch(low, high, inputArray, element){

        // Base condition: if search space becomes invalid, element is not present
        if(low > high) return -1

        // Calculate middle index of current search space
        const mid = Math.floor((low + high)/2)

        // If middle element is the target, return its index
        if(inputArray[mid] === element) return mid

        // If target is smaller than mid element, search in left half
        if(element < inputArray[mid]){

            // Search in left half
            return this.binarySearch(low, mid-1, inputArray, element)
        }
        else{

            // If target is greater than mid element, search in right half
            // Search in right half
            return this.binarySearch(mid+1, high, inputArray, element)
        }
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputData = input.split('\n')

    if(inputData.length === 2){

        // Convert input string into array of numbers
        const enteredArray = inputData[0].split(' ').map(element => Number(element))

        // Ensure array is valid
        if(enteredArray.length > 0){
            
            console.log(`Entered Array: [${enteredArray}]`)

            // Convert search element to number
            const searchElement = Number(inputData[1])

            // Validate search input
            if(!isNaN(searchElement)){

                console.log(`Searching element: ${searchElement}`)

                // Perform binary search and print result index
                console.log(`Element is present at index: ${new Solution().binarySearch(0, enteredArray.length-1, enteredArray, searchElement)}`)
                return
            }
            else{
                console.log(`Please provide searching element`)
            }
        }
        else{
            console.log(`Cannot process single element array`)
        }
    }

    console.log(`Cannot process your input`)
    return
})