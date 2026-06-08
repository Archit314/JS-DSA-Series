class Solution {

    // Stores the current best Upper bound index
    upperBond

    constructor(arr){

        // Initialize Upper bound as array length
        // This value will be returned if no element greater than
        // the target is found in the array
        this.upperBond = arr.length
    }

    getUpperBond(low, high, inputArray, element){

        // Base condition: search space exhausted
        // Return the best Upper bound found so far
        if(low > high) return this.upperBond

        // Calculate middle index of current search space
        let mid = Math.floor((low+high)/2)

        // If current element is strictly greater than target,
        // it can be a potential Upper bound
        if(inputArray[mid] > element){
            
            this.upperBond = mid
        }

        // If target is greater than or equal to middle element,
        // Upper bound must be present in the right half
        if(element >= inputArray[mid]){
            return this.getUpperBond(mid+1, high, inputArray, element)
        }
        else{

            // Current element may be the answer,
            // but there could be a smaller valid index on the left
            return this.getUpperBond(low, mid-1, inputArray, element)
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

                console.log(`Searching Upper bond for the element: ${searchElement}`)

                // Find and print the Upper bound index
                console.log(`Upper bond of ${searchElement} is present at index: ${new Solution(enteredArray).getUpperBond(0, enteredArray.length-1, enteredArray, searchElement)}`)
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