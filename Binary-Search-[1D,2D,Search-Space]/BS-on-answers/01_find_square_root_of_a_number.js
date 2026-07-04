class Solution{

    findSqrRoot(enteredNumber){

        // search space for possible square root values
        let leftPtr = 1
        let rightPtr = enteredNumber

        // stores the best (floor) square root found so far
        let squareRoot

        while(leftPtr <= rightPtr){

            // middle value of current search space
            let mid = Math.floor( (leftPtr+rightPtr)/2 )

            // if mid is a valid candidate (mid^2 <= number)
            // then store it and try to find a bigger valid value
            if(mid*mid <= enteredNumber){

                squareRoot = mid
                leftPtr = mid + 1
            }
            else{

                // mid is too large, search in left half
                rightPtr = mid - 1
            }
        }

        // return the largest valid mid found (floor sqrt)
        return squareRoot
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const userInput = Number(input)

    // validate input
    if(!isNaN(userInput)){

        console.log(`Entered number: ${userInput}`)
        
        // compute and print square root using binary search
        console.log(`Square root of ${userInput}: ${new Solution().findSqrRoot(userInput)}`)
    }
    else{
        console.log(`Cannot process non integer value`)
    }
})