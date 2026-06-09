class Solution {

    getFloorAndCeil(inputArray, element){

        // Initialize search space
        let low = 0
        let high = inputArray.length - 1

        // Store final answer for floor and ceil
        let floor = -1
        let ceil = -1

        // Binary search loop
        while(low <= high){

            // Find middle index
            let mid = Math.floor( (low+high) / 2)

            // Case 1: Exact match found
            // For exact match, floor and ceil are both the same element
            if(inputArray[mid] === element){

                ceil = inputArray[mid]
                floor = inputArray[mid]
                break;
            }

            // Case 2: mid element is greater than or equal to target
            // So it can be a potential ceil
            else if(inputArray[mid] >= element){

                ceil = inputArray[mid]

                // Move to left half to find smaller possible ceil
                high = mid - 1
            }

            // Case 3: mid element is smaller than target
            // So it can be a potential floor
            else{

                floor = inputArray[mid]

                // Move to right half to find larger possible floor
                low = mid + 1
            }
        }

        // Return final floor and ceil values
        return [floor, ceil]
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

                console.log(`Get Floor and Ceil for: ${searchElement}`)

                // Call function and print result
                console.log(`Floor, Ceil for ${searchElement}: ${new Solution(enteredArray).getFloorAndCeil(enteredArray, searchElement)}`)
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