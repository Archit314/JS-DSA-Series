class Solution{

    sortArr(arr){

        // Sort stall positions in ascending order
        return arr.sort((a, b) => a - b)
    }

    canWePlaceCow(arr, distance, cows){

        // Place the first cow at the first stall
        let previousCow = 0

        // Remaining cows to be placed
        let remainingCows = cows - 1

        // Try placing the remaining cows greedily
        for(let i = 1; i < arr.length && remainingCows > 0; i++){
            
            // If the current stall is at least 'distance' away
            // from the previously placed cow, place another cow
            if((arr[i] - arr[previousCow]) >= distance){

                previousCow = i
                remainingCows--
            }
        }

        // Return true if all cows have been placed
        return remainingCows === 0? true: false
    }

    maxDistanceAmongMinimum(arr, cows){

        // Sort the stall positions
        const sortedArr = this.sortArr(arr)

        // Binary search on the answer (minimum distance)
        let low = 1

        // Maximum possible minimum distance
        let high = sortedArr[sortedArr.length - 1] - sortedArr[0]

        while(low <= high){

            let mid = Math.floor( (low+high)/2 )

            // If cows can be placed with current minimum distance,
            // try for a larger distance
            if(this.canWePlaceCow(sortedArr, mid, cows)){

                low = mid + 1
            }

            // Otherwise reduce the minimum distance
            else{

                high = mid - 1
            }
        }
        
        // 'high' stores the largest valid minimum distance
        return high
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Read stall positions and number of cows
    const [cowStalls, aggressiveCows] = input.trim().split('\n').map((col, index) =>
        index === 0? col.split(' ').map(element => Number(element)): Number(col)
    )

    if(cowStalls.length > 0){

        console.log(`Cows stalls:`, cowStalls)

        if(!isNaN(aggressiveCows)){

            console.log(`Total Aggressive cows:`, aggressiveCows)

            // Find the maximum possible minimum distance
            console.log(`The max out of minimum distance between any two cows: ${new Solution().maxDistanceAmongMinimum(cowStalls, aggressiveCows)}`)
        }
        else{
            console.log(`Aggressive cows should be a number`)
        }
    }
    else{
        console.log(`Cannot process single element or empty array`)
    }

    return
})