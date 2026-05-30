class Solution{

    // Function to search for an element in the array using Linear Search
    searchElement(array, search){

        // Traverse the array element by element
        for(let i = 0; i < array.length; i++){

            // If the target element is found, return its index
            if(array[i] === search) return i
        }

        // Return -1 if the element is not found in the array
        return -1
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

// Execute once all input has been received
process.stdin.on('end', () => {

    // Split input into separate lines
    const inputData = input.split('\n')

    // Convert the first line into an array of numbers
    const enteredArray = inputData[0].split(' ').map(element => Number(element))

    // Process only if array contains more than one element
    if(enteredArray.length > 1){

        // Display the entered array
        console.log(`Entered Array: [${enteredArray}]`)

        // Read the element to be searched from the second line
        const searchingEle = Number(inputData[1])
        console.log(`Search element ${searchingEle} into the entered array`)

        // Perform linear search and store the result
        const result = new Solution().searchElement(enteredArray, searchingEle)

        // Display the index of the searched element
        console.log(`Element ${searchingEle} got at index ${result} in the entered array`)
        return
    }

    // Handle empty array or single element array case
    console.log(`Cannot process empty array or 1 element array`);
})