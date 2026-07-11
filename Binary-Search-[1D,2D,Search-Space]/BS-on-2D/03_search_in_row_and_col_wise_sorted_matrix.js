class Solution{

    binarySearch(arr, target){

        // Start from the top-right corner of the matrix
        let row = 0
        let col = arr[0].length - 1

        // Continue until we either go out of rows or columns
        while(row < arr.length && col >= 0){

            // console.log(row, col, arr[row][col], target)

            // If current element matches the target, return its position
            if(arr[row][col] === target){

                return [row, col]
            }

            // If current element is smaller than target,
            // move down to a larger element
            else if(arr[row][col] < target){
                row++
            }

            // If current element is greater than target,
            // move left to a smaller element
            else{
                col--
            }
        }

        // Target element is not present in the matrix
        return -1
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Convert input into a 2D matrix
    const userInput = input.split('\n').map(row => row.split(' ').map(element => Number(element)))

    // First line contains the target element
    const searchElement = userInput[0][0]

    if(!isNaN(searchElement)){

        console.log(`Search Element: ${searchElement}`)

        // Remaining input represents the matrix
        const matrix = userInput.slice(1, userInput.length)

        console.log('Entered Matrix', matrix)
        
        // Search for the target element in the matrix
        const result = new Solution().binarySearch(matrix, searchElement)

        if(result !== -1){
            console.log(`Element present at: ${result}`)
        }
        else{
            console.log(`Element not present.`)
        }
    }
    else{

        console.log(`Search element should be a number`)
    }
    
    return
})