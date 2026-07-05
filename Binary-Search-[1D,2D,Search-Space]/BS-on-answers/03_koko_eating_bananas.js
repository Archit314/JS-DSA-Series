class Solution{

    findLeastBananas(piles, hours){

        // search space: minimum eating speed is 1 banana/hour
        let leftPtr = 1

        // maximum eating speed is the largest pile (eat whole pile in 1 hour)
        let rightPtr = Math.max(...piles)

        while(leftPtr < rightPtr){

            // mid represents current eating speed being tested
            let mid = Math.floor( (leftPtr+rightPtr)/2 )

            // calculate total hours needed with current eating speed (mid)
            let ans = 0
            for(let element of piles){
                ans += Math.ceil(element/mid)
            }

            // if Koko can finish within allowed hours, mid is valid
            if(ans <= hours){

                // try to minimize speed further (look for smaller valid answer)
                rightPtr = mid
            }
            else{

                // mid is too slow, increase eating speed
                leftPtr = mid+1
            }
        }
        
        // leftPtr is the minimum valid eating speed
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

        const enteredArray = userData[0].split(' ').map(element => Number(element))

        if(enteredArray.length > 1){
            
            console.log(`Entered Array: [${enteredArray}]`)
            const enteredHours = Number(userData[1])

            if(!isNaN(enteredHours)){

                console.log(`Entered hours: ${enteredHours}`)
                console.log(`Minimum number of bananas that koko can eat per hour to complete piles in ${enteredHours} hours: ${new Solution().findLeastBananas(enteredArray, enteredHours)}`)
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