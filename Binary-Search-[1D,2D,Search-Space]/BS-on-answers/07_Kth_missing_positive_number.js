class Solution{

    findElement(arr, targetEle){

        let leftPtr = 0
        let rightPtr = arr.length - 1

        while(leftPtr <= rightPtr){

            // standard binary search mid
            let mid = Math.floor( (leftPtr+rightPtr)/2 )

            // count how many numbers are missing till index mid
            // formula: (expected value at mid) - (actual index)
            let missingElements = (arr[mid] - 1) - mid

            // if missing count is less than target, move right
            if(missingElements < targetEle){
                leftPtr = mid + 1
            }
            // otherwise move left
            else{
                rightPtr = mid - 1
            }
        }

        // edge case: kth missing lies before first element
        if(rightPtr < 0){
            return targetEle
        }

        // missing count till rightPtr index
        let missing = arr[rightPtr] - 1 - rightPtr

        // build final answer from last valid position
        return arr[rightPtr] + (targetEle - missing)
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const userInput = input.split('\n')

    if(userInput.length === 2){

        const enteredArray = userInput[0].split(' ').map(element => Number(element))

        if(enteredArray.length > 1){

            console.log(`Entered Array: [${enteredArray}]`)
            const targetElementPosition = Number(userInput[1])

            if(!isNaN(targetElementPosition)){

                console.log(`Target element Position: ${targetElementPosition}`)
                console.log(`Missing Element is: ${new Solution().findElement(enteredArray, targetElementPosition)}`)
            }
            else{
                console.log(`Element should be an integer`)
            }
        }
        else{
            console.log(`Cannot process single element or empty array`)
        }
    }
    else{
        console.log('Cannot process user input')
    }

    return
})