class Solution {

    findSecondLargestElement(enteredArray){

        // Initialize largest and second largest with lowest possible value
        let largestElement = -Infinity
        let secondLargestElement = -Infinity

        // Traverse the array once
        for(let i = 0; i < enteredArray.length; i++){

            // If current element is greater than largest
            // shift largest to second largest and update largest
            if(enteredArray[i] > largestElement){
                secondLargestElement = largestElement
                largestElement = enteredArray[i]
            }

            // If current element is not largest but greater than second largest
            // and not equal to largest, update second largest
            else if(
                enteredArray[i] > secondLargestElement &&
                enteredArray[i] !== largestElement
            ){
                secondLargestElement = enteredArray[i]
            }
        }

        // Return the second largest element found
        return secondLargestElement
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

// Process input after stream ends
process.stdin.on('end', () => {

    // Convert input string into array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Display input array
    console.log(`Entered Array: [${enteredArray}]`)

    // Edge case: empty array
    if(enteredArray.length === 0){
        console.log(`Entered array could not be empty`)
        return
    }

    // Edge case: single element array
    else if(enteredArray.length === 1){
        console.log(`Second largest element: ${enteredArray[0]}`)
    }

    // General case
    else{
        const result = new Solution().findSecondLargestElement(enteredArray)

        // If valid second largest exists, print it
        if(result){
            console.log(`Second largest element is: ${result}`)
            return
        }

        // If not found, show message
        console.log(`Unable to find second largest element`)
        return
    }
})