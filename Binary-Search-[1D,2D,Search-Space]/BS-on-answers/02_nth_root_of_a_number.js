class Solution{

    findNthRoot(powerNumber, enteredNumber){

        // define search space: possible root lies between 1 and enteredNumber
        let leftPtr = 1
        let rightPtr = enteredNumber

        // stores answer if exact nth root is found
        let nthRoot = -1

        while(leftPtr <= rightPtr){

            // calculate mid value (potential candidate for nth root)
            let mid = Math.floor( (leftPtr+rightPtr)/2 )

            // compute mid^powerNumber using controlled multiplication
            let powerRaisedNum = 1
            for(let i = 1; i <= powerNumber; i++){
                powerRaisedNum *= mid
            }

            // if exact match found, return result immediately
            if(powerRaisedNum === enteredNumber){
                nthRoot = mid
                return mid
            }
            else if(powerRaisedNum < enteredNumber){

                // mid is too small, search in right half
                leftPtr = mid + 1
            }
            else{

                // mid is too large, search in left half
                rightPtr = mid - 1
            }
        }

        // if no integer nth root exists, return -1
        return nthRoot
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // split input into power and number
    const userData = input.split('\n').map(element => Number(element))
    
    if(userData.length === 2){

        const powerElement = userData[0]
        
        if (!isNaN(powerElement)) {

            console.log(`Entered power element: ${powerElement}`)
            const inputNumber = userData[1]

            if(!isNaN(inputNumber)){

                console.log(`Entered input element: ${inputNumber}`)
                
                // call function to find nth root using binary search
                console.log(`Nth root of given number: ${new Solution().findNthRoot(powerElement, inputNumber)}`)
            }
            else{

                console.log(`Input number should be a number`)
            }
        } else {

            console.log('Power element should be a number')
        }
    }
    else{
        console.log('Invalid input')
    }

    return
})