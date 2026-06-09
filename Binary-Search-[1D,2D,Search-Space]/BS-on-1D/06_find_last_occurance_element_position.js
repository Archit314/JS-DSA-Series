class Solution{

    findLastOccurance(inputArray, element){

        let low = 0;
        let high = inputArray.length - 1

        // Stores index of last occurrence found so far
        let idx = -1

        // Standard binary search loop
        while(low <= high){

            // Calculate mid point of current search space
            let mid = Math.floor( (low+high) / 2)

            // If element is found, store index and move right
            if(inputArray[mid] === element){
                idx = mid
                low = mid + 1
            }

            // If mid value is less than or equal to target,
            // search in right half (but equality already handled above)
            else if(inputArray[mid] <= element){

                low = mid + 1
            }

            // If mid value is greater than target,
            // search in left half
            else{

                high = mid - 1
            }
        }

        // Return last occurrence index (or -1 if not found)
        return idx
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputData = input.split('\n')

    if(inputData.length === 2){

        const enteredArray = inputData[0].split(' ').map(element => Number(element))
        if(enteredArray.length > 1){

            console.log(`Entered Array: [${inputData}]`)
            const searchElement = Number(inputData[1])
            if(!(isNaN(searchElement))){

                console.log(`Last occurance of the element is at: ${new Solution().findLastOccurance(enteredArray, searchElement)}`)
            }
            else{

                console.log(`Cannot process your search element`)
            }
        }
        else{

            console.log(`Cannot process the entered array`)
        }
    }
    else{

        console.log(`Cannot process your input`)
    }

    return
})