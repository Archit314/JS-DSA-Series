
// Quick Sort Algorithm Implementation
// This class provides an in-place quick sort implementation using the Lomuto partition scheme.
// Quick sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array
// into elements less than the pivot and greater than the pivot, then recursively sorts the subarrays.
// Time Complexity: O(n log n) average, O(n^2) worst-case. Space Complexity: O(log n) due to recursion.
// Suitable for arrays; not stable (relative order of equal elements may change).

class Solution {

    // Main quick sort method: Initiates the sorting process on the entire array.
    // Parameters: enteredArray - the array to be sorted in-place.
    quickSort(enteredArray){
        // Call the recursive algorithm with initial low and high indices.
        this.algo(enteredArray, 0, enteredArray.length - 1)
    }

    // Recursive algorithm for quick sort partitioning and sorting.
    // Parameters: enteredArray - the array being sorted, low - starting index, high - ending index.
    algo(enteredArray, low, high){
        // Base case: If the subarray has 0 or 1 elements, no sorting needed.
        if(low >= high) return

        // Get the pivot element: Choose the first element as pivot (Lomuto scheme).
        // This pivot will be used to partition the array.
        let pivot = enteredArray[low]

        // Initialize pointers: leftPtr starts after pivot, rightPtr at the end.
        // leftPtr will move right to find elements >= pivot.
        // rightPtr will move left to find elements <= pivot.
        let leftPtr = low + 1
        let rightPtr = high

        // Partitioning loop: Continue until pointers cross.
        while(leftPtr <= rightPtr){

            // Move leftPtr right past elements smaller than pivot.
            // Stops when leftPtr finds an element >= pivot or reaches end.
            while(leftPtr <= high && enteredArray[leftPtr] < pivot){
                leftPtr++
            }

            // Move rightPtr left past elements larger than pivot.
            // Stops when rightPtr finds an element <= pivot or reaches start.
            while(rightPtr >= low && enteredArray[rightPtr] > pivot){
                rightPtr--
            }

            // If pointers haven't crossed, swap the out-of-place elements and move pointers.
            // This ensures elements < pivot are on left, > pivot on right.
            if(leftPtr < rightPtr){
                [enteredArray[leftPtr], enteredArray[rightPtr]] = [enteredArray[rightPtr], enteredArray[leftPtr]]
                leftPtr++
                rightPtr--
            }
        }

        // Place the pivot in its correct position by swapping with rightPtr.
        // After partitioning, rightPtr is at the position where pivot should be.
        [enteredArray[low], enteredArray[rightPtr]] = [enteredArray[rightPtr], enteredArray[low]]

        // Recursively sort the left subarray (elements < pivot).
        this.algo(enteredArray, low, rightPtr - 1)
        // Recursively sort the right subarray (elements > pivot).
        this.algo(enteredArray, rightPtr + 1, high)
    }
}

let input = ''

// Collecting user input: Read all data from stdin (standard input) as a string.
// This handles input from files or user input in competitive programming style.
process.stdin.on('data', data => {
    input += data
})

// Processing user input: Once all input is read, process it.
// Split the input string by spaces, convert each part to a number, and sort the array.
process.stdin.on('end', () => {

    const userInput = input.split(' ').map(element => Number(element))
    console.log(`Entered Array: [${userInput}]`)

    new Solution().quickSort(userInput)
    console.log(userInput)
})