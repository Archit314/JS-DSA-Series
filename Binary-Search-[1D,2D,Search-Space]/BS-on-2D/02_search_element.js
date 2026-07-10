class Solution{

    searchElement(arr, target){

        // Check if target is outside the range of the matrix
        // Since matrix is sorted, anything smaller than first element
        // or greater than last element cannot exist
        if((target > arr[arr.length - 1][arr[0].length - 1]) || (target < arr[0][0])){
            return false
        }

        // Treat the complete 2D matrix as a single sorted 1D array
        // Total elements = rows * columns
        let leftPtr = 0
        let rightPtr = ((arr.length) * (arr[0].length)) - 1

        // Apply binary search on the virtual 1D array
        while(leftPtr <= rightPtr){

            let mid = Math.floor( (leftPtr+rightPtr)/2 )

            // Convert 1D index into 2D row index
            // Division by number of columns gives row number
            let row = Math.floor(mid/ (arr[0].length))

            // Convert 1D index into 2D column index
            // Modulo gives the remaining column position
            let col = Math.floor(mid% (arr[0].length))

            // If element found, return true
            if(arr[row][col] === target){
                return true
            }

            // If current element is smaller,
            // search in the right half
            else if(arr[row][col] < target){
                leftPtr = mid + 1
            }

            // If current element is greater,
            // search in the left half
            else{
                rightPtr = mid - 1
            }
        }

        // Target does not exist in matrix
        return false
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Convert input lines into 2D array
    let userInput = input.split('\n').map(row => row.split(' ').map(element => Number(element)))

    // First row contains target element
    const searchElement = userInput[0][0]

    // Remaining rows represent the matrix
    const matrix = userInput.slice(1, userInput.length)

    if(!isNaN(searchElement)){

        console.log(`Search element: ${searchElement}`)

        if(matrix.length > 0){
    
            console.log(`Entered matrix: ${matrix}`)

            // Search target element inside matrix
            console.log(`Is element present in the matrix: ${new Solution().searchElement(matrix, searchElement)}`)
        }
        else{
            console.log(`Cannot process the user input`)
        }
    }
    else{

        console.log(`Search element should be a number`)
    }

    return
})