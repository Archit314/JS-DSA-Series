class Solution{

    sortArray(array){

        // Pointer for placing 0s at the beginning of the array
        let high = array.length - 1

        // Pointer for placing 0s at the beginning of the array
        let low = 0

        // Pointer used to traverse the array
        let mid = 0

        // Process elements until all unknown elements are handled
        while(mid <= high){

            // If the current element is 0,
            // place it in the 0s region and move both pointers forward
            if(array[mid] === 0){

                [array[low], array[mid]] = [array[mid], array[low]];
                low++
                mid++
            }

            // If the current element is 1,
            // it is already in the correct region
            else if(array[mid] === 1){

                mid++
            }

            // If the current element is 2,
            // move it to the end of the array
            else{

                [array[high], array[mid]] = [array[mid], array[high]]
                high--
            }
        }
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

// Dutch National Flag Partition:
//
// array start ---------- low ----------- high ----------- array end
//             0 0 0 0 0 0   1 1 1 1 1 1 1     2 2 2 2 2 2
//
// 0 to low - 1      => all 0s
// low to mid - 1    => all 1s
// mid to high       => unprocessed elements
// high + 1 to end   => all 2s

process.stdin.on('end', () => {

    // Convert input into an array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Process only if the array contains more than one element
    if(enteredArray.length > 1){

        console.log(`Entered Array: [${enteredArray}]`)

        // Sort the array containing only 0s, 1s, and 2s
        new Solution().sortArray(enteredArray)

        console.log(`Array after sorting: [${enteredArray}]`)
        return
    }

    console.log(`Cannot process empty or single element array`)
})