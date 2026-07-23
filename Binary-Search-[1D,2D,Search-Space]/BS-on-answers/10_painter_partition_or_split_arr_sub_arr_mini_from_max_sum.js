class Solution{

    // Check if array can be split into at most 'totalSub' subarrays
    // such that no subarray sum exceeds the guessed maximum sum
    canBreakArr(arr, guess, totalSub){

        // At least one subarray will always exist
        let allocated = 1

        // Stores current subarray sum
        let sum = 0

        for(let element of arr){

            // Add element if it does not exceed guessed maximum sum
            if(sum + element <= guess){
                sum += element
            }
            else{

                // Otherwise, start a new subarray
                sum = element
                allocated += 1
            }
        }

        // Valid if required subarrays are within the allowed limit
        return allocated <= totalSub
    }

    findMinOfMaxSubArrSum(arr, totalSubArr){

        // Minimum possible answer cannot be less than the largest element
        let low = Math.max(...arr)

        // Maximum possible answer is sum of the entire array
        let high = arr.reduce((sum, current) => sum += current)

        // Binary search on the answer space
        while(low <= high){

            let mid = Math.floor( (low + high)/2 )

            // If current guessed sum is too small,
            // search in the higher half
            if(!this.canBreakArr(arr, mid, totalSubArr)){

                low = mid + 1
            }
            else{

                // Otherwise, try to minimize the maximum subarray sum
                high = mid - 1
            }
        }

        // Smallest possible maximum subarray sum
        return low
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // First line contains the array,
    // second line contains the required number of subarrays
    const [enteredArr, totalNumber] = input.split('\n').map((col, index) => index === 0? col.split(' ').map(element => Number(element)): Number(col))

    if(isNaN(totalNumber)){
        console.log(`Total number of sub array should be a number`)
        return
    }

    // Number of subarrays cannot exceed array length
    if(enteredArr.length >= totalNumber){

        console.log(`Entered Array:`, enteredArr)
        console.log(`Minimum out of max painter partition or split arr: ${new Solution().findMinOfMaxSubArrSum(enteredArr, totalNumber)}`)
    }
    else{
        console.log(`Array length should not be less than the total number of sub array`)
    }

    return
})