class Solution {

    getDesiredElement(arr){

        // Initialize search range using first row
        let low = arr[0][0]
        let high = arr[0][arr[0].length - 1]

        // Find the minimum first element and maximum last element
        // across all rows to determine the search space
        for(let i = 1; i < arr.length; i++){
            low = Math.min(low, arr[i][0])
            high = Math.max(high, arr[i][arr[0].length - 1])
        }

        // Return the minimum and maximum values in the matrix
        return [low, high]
    }

    getLessAndEqualElements(arr, target){

        // Count of elements less than or equal to target
        let count = 0

        // Traverse every row
        for(let row = 0; row < arr.length; row++){

            // Apply binary search in the current row
            let low = 0
            let high = arr[row].length - 1

            while(low <= high){

                let mid = Math.floor( (low+high)/2 )

                // If current element is less than or equal to target,
                // search in the right half
                if(arr[row][mid] <= target){
                    low = mid + 1
                }

                // Otherwise search in the left half
                else{
                    high = mid - 1
                }
            }

            // 'low' represents the number of elements <= target
            // in the current row
            count += low
        }

        // Return total count of elements <= target
        return count
    }

    findMedium(mat){

        // Median position in the fully sorted matrix
        let target = Math.floor(((mat[0].length)*(mat.length)) / 2)

        // Get the minimum and maximum values in the matrix
        let [low, high] = this.getDesiredElement(mat)
        
        // Apply binary search on the answer (value range)
        while(low <= high){

            let mid = Math.floor( (low+high)/2 )

            // Count how many elements are <= mid
            const count = this.getLessAndEqualElements(mat, mid)

            // If count is not enough, median lies on the right
            if(count <= target){

                low = mid + 1
            }

            // Otherwise, median lies on the left (or is mid)
            else{

                high = mid - 1
            }
        }

        // 'low' points to the median value
        return low
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

        console.log(`Entered matrix:`, matrix)

        // Find and print the median of the row-wise sorted matrix
        console.log(`Median: ${new Solution().findMedium(matrix)}`)
    }
    else{
        console.log(`Cannot process single row or empty matrix`)
    }

    return
})