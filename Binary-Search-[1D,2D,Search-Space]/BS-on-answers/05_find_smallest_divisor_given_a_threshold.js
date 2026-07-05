class Solution{

    // Calculates the sum after dividing every element by 'mid'
    // and taking the ceiling of each division
    divisorSum(arr, mid){

        // Stores the total sum
        let sum = 0

        for(let element of arr){

            // Add the ceiling division result
            sum += Math.ceil(element/mid)
        }

        // Return the computed sum
        return sum
    }

    // Uses Binary Search on Answer to find the smallest divisor
    findMinDivisor(arr, threshold){

        // Smallest possible divisor
        let leftPtr = 1

        // Largest possible divisor
        let rightPtr = Math.max(...arr)

        while(leftPtr <= rightPtr){

            // Candidate divisor
            let mid = Math.floor( (leftPtr+rightPtr)/2 )

            // Calculate the sum using the current divisor
            let ans = this.divisorSum(arr, mid)

            // Valid divisor, try to find a smaller one
            if(ans <= threshold){

                rightPtr = mid - 1
            }
            // Sum exceeds threshold, increase divisor
            else{

                leftPtr = mid + 1
            }
        }

        // Smallest valid divisor
        return leftPtr
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Split input into array and threshold
    const userData = input.split('\n')
    
    if(userData.length === 2){

        // Convert the first line into an array of numbers
        const enteredArray = userData[0].split(' ').map(element => Number(element))

        if(enteredArray.length > 1){
            
            console.log(`Entered Array: [${enteredArray}]`)

            // Read the threshold value
            const enteredThreshold = Number(userData[1])

            if(!isNaN(enteredThreshold)){

                console.log(`Entered Threshold: ${enteredThreshold}`)

                // Find and print the smallest valid divisor
                console.log(`Minimum divisor: ${new Solution().findMinDivisor(enteredArray, enteredThreshold)}`)
            }
        }
        else{

            console.log('Cannot handle single element array')
        }
    }
    else{

        console.log('Cannot process user input')
    }

    return
})