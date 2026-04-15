
class Solution{

    // Public entry point for merge sort.
    // Accepts an array of numbers and sorts it in-place using merge sort.
    mergeSort(enteredArray){

        // Start the recursive divide-and-merge process on the whole array.
        this.divideAndMerge(enteredArray, 0, enteredArray.length-1)        
    }

    // Recursively divides the array into halves and merges them back.
    // Parameters:
    // - enteredArray: the array being sorted (modified in-place)
    // - low: starting index of the current subarray
    // - high: ending index of the current subarray
    divideAndMerge(enteredArray, low, high){

        // Base case: a subarray of length 0 or 1 is already sorted.
        if(low >= high) return

        // Find the midpoint to split the array into two halves.
        let mid = Math.floor((low + high) / 2)

        // Sort (recursively) the left half [low..mid]
        this.divideAndMerge(enteredArray, low, mid)

        // Sort (recursively) the right half [mid+1..high]
        this.divideAndMerge(enteredArray, mid+1, high)

        // Merge the two sorted halves into a single sorted range.
        this.merge(enteredArray, low, mid, high)
    }

    // Merge two sorted subarrays of enteredArray into a single sorted segment.
    // Left subarray:  [low .. mid]
    // Right subarray: [mid+1 .. high]
    // This implementation uses a temporary array and copies the merged
    // results back into the original array in the range [low..high].
    merge(enteredArray, low, mid, high){

        // Temporary array to hold merged values.
        let tempArr = []

        // Pointers for the current element in left and right subarrays.
        let leftPtr = low
        let rightPtr = mid+1

        // Compare elements from both halves and push the smaller one.
        while( (leftPtr <= mid) && (rightPtr <= high) ){
            if(enteredArray[leftPtr] <= enteredArray[rightPtr]){
                tempArr.push(enteredArray[leftPtr])
                leftPtr++
            }
            else{
                tempArr.push(enteredArray[rightPtr])
                rightPtr++
            }
        }

        // If left half still has elements, append them.
        while( leftPtr <= mid ){
            tempArr.push(enteredArray[leftPtr++])
        }

        // If right half still has elements, append them.
        while( rightPtr <= high ){
            tempArr.push(enteredArray[rightPtr++])
        }

        // Copy merged elements back into the original array starting at `low`.
        for(let ele of tempArr){
            enteredArray[low] = ele
            low++
        }
    }
}

let input = ''

// Taking user input:
process.stdin.on('data', data => {
    input += data
})

// Processing user input:
process.stdin.on('end', () => {

    const userInput = input.split(' ').map(element => Number(element.trim()))
    console.log(`User entered Array: [${userInput}]`)

    new Solution().mergeSort(userInput)

    console.log(`Array after sorting: [${userInput}]`)    
})