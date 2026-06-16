class Solution {

    findPeakElement(arr){

        let low = 0
        let high = arr.length - 1

        // If the last element is greater than its left neighbor,
        // then it is a peak element
        if(arr[high] > arr[high- 1]) return arr[high]

        // If the first element is greater than its right neighbor,
        // then it is a peak element
        if(arr[low] > arr[low + 1]) return arr[low]

        while(low <= high){

            // Calculate the middle index of the current search space
            let mid  = Math.floor( (low+high)/2 )

            // If the middle element is greater than both neighbors,
            // then we have found a peak element
            if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return arr[mid]

            // If the current position is on an increasing slope,
            // then a peak element must exist on the right side
            if(arr[mid] > arr[mid-1]){
                low = mid + 1
            }
            // Otherwise we are on a decreasing slope,
            // so a peak element must exist on the left side
            else{
                high = mid - 1
            }
        }        
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

        // Find and print a peak element
        console.log(`Peak element is: ${new Solution().findPeakElement(enteredArray)}`)
    }
    else if (enteredArray.length === 1){

        console.log(`Entered Array: [${enteredArray}]`);
        console.log(`Peak element is: ${enteredArray[0]}`)
    }
    else {
        console.log(`Cannot process single element or empty array`)
    }

    return
})