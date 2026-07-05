class Solution{

    // Calculates how many bouquets can be formed by 'mid' day
    findTotalBouquets(mid, days, flower){

        // Counts consecutive bloomed flowers
        let count = 0

        // Stores total bouquets that can be made
        let available = 0

        for(let element of days){

            // Flower has bloomed by 'mid' day
            if(element <= mid){

                count++
            }
            else{

                // End of consecutive sequence, calculate bouquets from current streak
                available += Math.floor(count/flower)

                // Reset consecutive flower count
                count = 0
            }
        }

        // Process the last consecutive streak (if any)
        if(count > 0){
            available += Math.floor(count/flower)
        }

        // Return total bouquets possible by 'mid' day
        return available
    }

    // Uses Binary Search on Answer to find minimum days required
    findMinimumDays(days, bouquets, flowers){

        // Minimum possible day
        let leftPtr = Math.min(...days)

        // Maximum possible day
        let rightPtr = Math.max(...days)

        while(leftPtr <= rightPtr){

            // Candidate day
            let mid = Math.floor( (leftPtr+rightPtr)/2 )

            // Find bouquets that can be made by 'mid' day
            let ans = this.findTotalBouquets(mid, days, flowers)

            // Not enough bouquets, search larger days
            if(ans < bouquets){
                leftPtr = mid + 1
            }
            // Enough bouquets, try to minimize the answer
            else if(ans >= bouquets){
                rightPtr = mid - 1
            }
        }

        // Smallest valid day required
        return leftPtr
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Split input into array, bouquets and flowers
    const userData = input.split('\n')

    if(userData.length === 3){

        // Read blooming days array
        const enteredDaysArray = userData[0].split(' ').map(element => Number(element))

        if(enteredDaysArray.length > 1){

            console.log(`Entered array of days: [${enteredDaysArray}]`)

            // Read required number of bouquets
            const totalBouquets = Number(userData[1])
            
            if(!isNaN(totalBouquets)){

                console.log(`Total bouquets: ${totalBouquets}`)

                // Read flowers required per bouquet
                const totalFlowers = Number(userData[2])

                if(!isNaN(totalFlowers)){

                    console.log(`Total Flowers: ${totalFlowers}`)

                    // Check if enough flowers exist to form required bouquets
                    if(totalBouquets*totalFlowers <= enteredDaysArray.length){

                        // Find minimum days required
                        console.log(`Total days required to create bouquet: ${new Solution().findMinimumDays(enteredDaysArray, totalBouquets, totalFlowers)}`)
                    }
                    else{

                        // Impossible to make required bouquets
                        console.log(`Not possible to make the required bouquets`)
                    }
                }
            }
            else{

                console.log('Total bouquets should be numbers')
            }
        }
        else{

            console.log('Cannot process single or empty array')
        }
    }
    else{

        console.log('cannot process user input')
    }

    return
})