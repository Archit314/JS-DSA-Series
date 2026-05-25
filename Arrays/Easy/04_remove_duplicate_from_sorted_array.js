class Solution{

    // Function to remove duplicate elements from a sorted array in-place
    removeDuplicateElements(enteredArray){

        // Pointer to traverse the array
        let currentElement = 0

        // Pointer to track the last unique element position
        let previousElement = 0

        // Traverse the entire array
        while(currentElement < enteredArray.length){

            // If current element is greater than previous unique element,
            // it means a new unique element is found
            if(enteredArray[currentElement] > enteredArray[previousElement]){

                // Place the new unique element next to the last unique element
                [enteredArray[previousElement + 1], enteredArray[currentElement]] = [enteredArray[currentElement], enteredArray[previousElement + 1]]

                // Move unique element pointer forward
                previousElement++
            }

            // Move traversal pointer forward
            currentElement ++;
        }

        // Return total count of unique elements
        return previousElement + 1
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

// Execute after input stream ends
process.stdin.on('end', () => {

    // Convert input string into array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Display entered array
    console.log(`Entered Array: [${enteredArray}]`)

    // Process only if array has more than one element
    if(enteredArray.length > 1){
        
        // Remove duplicates and get count of unique elements
        const lastUniqueElementIndex = new Solution().removeDuplicateElements(enteredArray)
    
        // Print array containing only unique elements
        console.log(`Array after removing the duplicate elements: [${enteredArray.slice(0, lastUniqueElementIndex)}]`)
    }

    // Handle single element or empty array case
    else{
        console.log(`Single element array or empty array cannot be processed`)
    }

})