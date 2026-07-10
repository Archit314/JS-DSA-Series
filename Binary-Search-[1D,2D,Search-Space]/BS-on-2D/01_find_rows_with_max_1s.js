class Solution {

    binarySearch(arr){

        // Initialize binary search pointers
        let leftPtr = 0
        let rightPtr = arr.length - 1

        // If the first element is 1, then the entire row contains 1's
        if(arr[0] === 1){
            return rightPtr + 1
        }
        // If the last element is 0, then the row contains no 1's
        else if(arr[rightPtr] === 0){
            return leftPtr
        }
        else{

            // Store the index of the first occurrence of 1
            let firstOneIdx

            while(leftPtr <= rightPtr){
    
                // Find the middle index
                let mid = Math.floor( (leftPtr + rightPtr)/2 )
    
                if(arr[mid] === 1){
    
                    // Store current index and continue searching on the left
                    // to find the first occurrence of 1
                    firstOneIdx = mid
                    rightPtr = mid - 1
                }
                else{
                    // Search in the right half
                    leftPtr = mid + 1
                }
    
            }
    
            // Calculate the total number of 1's in the row
            return ((arr.length - 1) - firstOneIdx) + 1
        }
    }

    findMaxOneRow(matrix){

        // Store the maximum count of 1's and its corresponding row index
        let maxOnesRow = -1
        let maxOnesRowIdx = -1

        // Traverse every row in the matrix
        for(let i = 0; i < matrix.length; i++){

            // Count the number of 1's in the current row
            let onesCount = this.binarySearch(matrix[i])

            // Update the answer if the current row has more 1's
            if(onesCount > 0 && onesCount > maxOnesRow){
                maxOnesRow = onesCount
                maxOnesRowIdx = i
            }
        }

        // Return the index of the row having the maximum number of 1's
        return maxOnesRowIdx
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Convert input into a 2D matrix
    const matrix = input.split('\n').map(row => row.split(' ').map(element => Number(element)))

    const obj = new Solution()

    console.log('Entered matrix:', matrix)
    console.log(`Row with max number of 1's: ${obj.findMaxOneRow(matrix)}`)

    return
})