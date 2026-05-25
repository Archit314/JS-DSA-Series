class Solution{

    // Function to check whether the array is sorted in non-decreasing order
    isArraySorted(enteredArray){

        // Traverse the array and compare each element with its next element
        for(let i = 0; i < enteredArray.length - 1; i++){

            // If current element is greater than next element, array is not sorted
            if(enteredArray[i] > enteredArray[i+1]) return false
        }

        // If no violation found, array is sorted
        return true
    }
}

let input = ''

// Read input data from stdin
process.stdin.on('data',  data => {
    input += data
})

// Process input after input stream ends
process.stdin.on('end', () => {

    // Convert input string into array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Display the entered array
    console.log(`Entered Array: [${enteredArray}]`)

    // If array has elements
    if(enteredArray.length > 0){

        // Check if array is sorted
        const result = new Solution().isArraySorted(enteredArray)

        // Print result accordingly
        if(result){
            console.log(`Array is sorted`)
        }
        else{
            console.log(`Array is not sorted`)
        }
    }

    // If array is empty (edge case handling)
    else if(enteredArray.length === 0){
        console.log(`Array is sorted`)
    }

    // Fallback case (rare / invalid input scenario)
    else{
        console.log(`Array is empty`)
    }
})