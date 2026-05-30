class Solution{

    // Function to find the union of two sorted arrays
    unionArrays(array1, array2){

        // Array to store the union elements
        let newMap = []

        // Pointer for first array
        let firstArrPtr = 0

        // Pointer for second array
        let secondArrPtr = 0

        // Traverse both arrays until one of them is exhausted
        while( (firstArrPtr < array1.length) && (secondArrPtr < array2.length) ){

            // If current element of first array is smaller
            if(array1[firstArrPtr] < array2[secondArrPtr]){

                // Add element only if it is not already present
                // as the last inserted element in the union array
                if(newMap[newMap.length - 1] !== array1[firstArrPtr]){
                    
                    newMap.push(array1[firstArrPtr])
                }

                // Move first array pointer forward
                firstArrPtr++
            }

            // If both elements are equal
            else if(array1[firstArrPtr] === array2[secondArrPtr]){

                // Add element only once to avoid duplicates
                if(newMap[newMap.length - 1] !== array1[firstArrPtr]){

                    newMap.push(array1[firstArrPtr])
                }

                // Move both pointers forward
                firstArrPtr++
                secondArrPtr++
            }

            // If current element of second array is smaller
            else{

                // Add element only if it is not already present
                if(newMap[newMap.length - 1] !== array2[secondArrPtr]){
                    
                    newMap.push(array2[secondArrPtr])
                }

                // Move second array pointer forward
                secondArrPtr++
            }
        }

        // Process remaining elements of the first array
        while(firstArrPtr < array1.length){

            // Add only unique elements
            if(newMap[newMap.length - 1] !== array1[firstArrPtr]){
                newMap.push(array1[firstArrPtr])
            }

            // Move first array pointer forward
            firstArrPtr++
        }

        // Process remaining elements of the second array
        while(secondArrPtr < array2.length){

            // Add only unique elements
            if(newMap[newMap.length - 1] !== array2[secondArrPtr]){
                newMap.push(array2[secondArrPtr])
            }

            // Move second array pointer forward
            secondArrPtr++
        }

        // Return the final union array
        return newMap
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

// Execute after all input has been received
process.stdin.on('end', () => {

    // Split input into separate lines
    const inputData = input.split('\n')

    // Validate that two arrays are provided
    if(inputData.length < 2){
        console.log(`There should be 2 arrays`)
        return
    }

    // Convert first input line into an array of numbers
    const firstArray = inputData[0].split(' ').map(element => Number(element))

    // Validate first array
    if(firstArray.length < 2){
        console.log(`First array is either Single element or empty array which cannot be processed.`)
        return
    }

    // Display first array
    console.log(`First Sorted Array: [${firstArray}]`)

    // Convert second input line into an array of numbers
    const secondArray = inputData[1].split(' ').map(element => Number(element))

    // Validate second array
    if(secondArray.length < 2){
        console.log(`Second array is either Single element or empty array which cannot be processed.`)
        return
    }

    // Find and display the union of both arrays
    console.log(`Resultant Array [${new Solution().unionArrays(firstArray, secondArray)}]`)
})