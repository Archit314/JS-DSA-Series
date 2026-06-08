class Solution {

    // Stores the current best lower bound index
    lowerBond

    constructor(arr){

        // Initialize lower bound as array length
        // This will be returned if no element >= target is found
        this.lowerBond = arr.length
    }

    getLowerBond(low, high, inputArray, element){

        // Base condition: search space exhausted
        // Return the best lower bound found so far
        if(low > high) return this.lowerBond

        // Calculate middle index
        let mid = Math.floor((low+high)/2)

        // If current element is greater than or equal to target,
        // it can be a potential lower bound
        if(inputArray[mid] >= element){
            
            this.lowerBond = mid
        }

        // If target is greater than middle element,
        // lower bound must be in the right half
        if(element > inputArray[mid]){
            return this.getLowerBond(mid+1, high, inputArray, element)
        }
        else{

            // Current element may be the answer,
            // but there could be a smaller valid index on the left
            return this.getLowerBond(low, mid-1, inputArray, element)
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

                console.log(`Searching lower bond for the element: ${searchElement}`)

                // Find and print the lower bound index
                console.log(`Lower bond of ${searchElement} is present at index: ${new Solution(enteredArray).getLowerBond(0, enteredArray.length-1, enteredArray, searchElement)}`)
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