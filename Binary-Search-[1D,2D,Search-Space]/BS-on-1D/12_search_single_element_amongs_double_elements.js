class Solution {

    findSingleElement(arr){

        let low = 0;
        let high = arr.length - 1

        // If the first element is not equal to the second,
        // then the first element itself is the single element
        if((arr[low] !== arr[low+1])){
            return arr[low]
        }

        // If the last element is not equal to the second last,
        // then the last element itself is the single element
        if(arr[high] !== arr[high-1]){
            return arr[high]
        }

        while(low <= high){

            // Calculate middle index
            let mid = Math.floor( (low+high)/2 )

            // If current element is different from both neighbors,
            // then it is the single element
            if((arr[mid] !== arr[mid+1]) && (arr[mid] !== arr[mid-1])){
                
                return arr[mid]
            }

            // Check whether the pairing pattern is correct up to mid.
            // If yes, the single element lies on the right side.
            if((mid % 2 !== 0 && (arr[mid - 1] === arr[mid])) || (mid % 2 === 0 && (arr[mid] === arr[mid + 1]))) {

                low = mid+1
            }
            else{

                // Pairing pattern is broken,
                // so the single element lies on the left side
                high = mid - 1
            }

            
        }

        // Return -1 if no single element is found
        return -1
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Convert input string into an array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Ensure array is not empty
    if(enteredArray.length > 1){

        console.log(`Entered array: [${enteredArray}]`)

        // Find and print the single element
        console.log(`Single element is: ${new Solution().findSingleElement(enteredArray)}`)
    }
    else if (enteredArray.length === 1){

        console.log(`Entered Array: [${enteredArray}]`);
        console.log(`Single element is: ${enteredArray[0]}`)
    }
    else {
        console.log(`Cannot process single element or empty array`)
    }

    return
})