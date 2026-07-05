class Solution{

    // Check whether the assumed ship capacity can ship all packages
    // within the given number of days
    isAssumedWeightCorrect(arr, mid, days){

        // Stores the current load on the ship for a day
        let load = 0

        // At least one day is required to start shipping
        let totalDays = 1

        // Traverse all package weights
        for(let element of arr){

            // If adding the current package exceeds the assumed capacity,
            // ship it on the next day
            if(load + element > mid){

                totalDays += 1
                load = element
            }
            // Otherwise, continue loading packages for the current day
            else{
                load += element
            }
        }

        // Return true if all packages can be shipped
        // within the given days, otherwise false
        return totalDays <= days
    }

    // Find the minimum ship capacity required
    findMinimumDaysToShipPackages(arr, days){

        // Minimum possible capacity is the heaviest package
        let leftPtr = Math.max(...arr)

        // Maximum possible capacity is shipping all packages in one day
        let rightPtr = arr.reduce((a, b) => a + b, 0)

        // Binary Search on the answer (ship capacity)
        while(leftPtr <= rightPtr){

            // Calculate the middle capacity
            let mid = Math.floor( (leftPtr+rightPtr)/2 )

            // If current capacity is sufficient,
            // search for a smaller valid capacity
            if(this.isAssumedWeightCorrect(arr, mid, days)){
                rightPtr = mid - 1
            }
            // Otherwise, increase the ship capacity
            else{
                leftPtr = mid + 1
            }
        }

        // Smallest valid ship capacity
        return leftPtr
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const userData = input.split('\n')
    
    if(userData.length === 2){

        // Convert entered package weights into an array of numbers
        const enteredArray = userData[0].split(' ').map(element => Number(element))

        if(enteredArray.length > 1){
            
            console.log(`Entered Array: [${enteredArray}]`)

            // Read the total number of days
            const totalDays = Number(userData[1])

            if(!isNaN(totalDays)){

                console.log(`Entered Days: ${totalDays}`)

                // Find and print the minimum ship capacity required
                console.log(`Minimum Weight to ship packages: ${new Solution().findMinimumDaysToShipPackages(enteredArray, totalDays)}`)
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