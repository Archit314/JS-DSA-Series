class Solution{

    findGreaterNumber(matrix, col){

        // Assume first element in the column is the maximum
        let greaterEleRow = 0
        let maxi = matrix[0][col]

        // Traverse the current column to find the maximum element
        for(let row = 1; row < matrix.length; row++){

            if(matrix[row][col] > maxi){
                maxi = matrix[row][col]
                greaterEleRow = row
            }
        }

        // Return the row index of the maximum element
        return greaterEleRow
    }

    findPeakElement(matrix){

        // Binary search on columns
        let low = 0
        let high = matrix[0].length - 1

        let rows = matrix.length
        let cols = matrix[0].length

        while(low <= high){

            // Find the middle column
            let mid = Math.floor( (low+high)/2 )

            // Find the row containing the maximum element
            // in the current middle column
            const maxEleRow = this.findGreaterNumber(matrix, mid)

            // Get left and right neighbors
            // If neighbor doesn't exist, consider it as -1
            let left = mid - 1 >= 0? matrix[maxEleRow][mid - 1]: -1
            let right = mid + 1 < cols? matrix[maxEleRow][mid + 1]: -1

            // If current element is greater than both neighbors,
            // it is a peak element
            if(matrix[maxEleRow][mid] > left && matrix[maxEleRow][mid] > right){
                return [maxEleRow, mid]
            }

            // If left neighbor is greater,
            // move binary search to the left half
            else if(matrix[maxEleRow][mid] < left){
                high = mid - 1
            }

            // Otherwise move to the right half
            else{
                low = mid + 1
            }
        }

        // No peak found (this case should never occur for valid input)
        return [-1, -1]
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Convert input into a 2D matrix
    const matrix = input.split('\n').map(row => row.split(' ').map(element => Number(element)))
    
    if(matrix.length > 1){

        console.log('Entered Matrix:', matrix)

        // Find the peak element position
        console.log(`Peak element present at index: ${new Solution().findPeakElement(matrix)}`)
    }
    else{
        console.log('Cannot process 1D or empty array.')
    }

    return
})