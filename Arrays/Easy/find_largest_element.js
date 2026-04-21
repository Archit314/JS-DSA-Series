
class Solution {

    getLargestElement(enteredArray){

        if(enteredArray.length === 0){
            console.log(`Cannot find largest element in empty array`)

            return
        }

        let largestElement = enteredArray[0]

        for(let i = 1; i < enteredArray.length; i++){
            if(enteredArray[i] > largestElement){
                largestElement = enteredArray[i]
            }
        }

        console.log(`Largest Element is: ${largestElement}`)
    }
}

let input = ''

// Collecting user input:
process.stdin.on('data', data => {
    input += data
})

// Processing user input:
process.stdin.on('end', () => {

    const userInput = input.split(' ').map(element => Number(element))
    console.log(`Entered Array: [${userInput}]`)

    if(userInput.length === 1){
        console.log(`Cannot find largest element in single element array`)
        return
    }

    new Solution().getLargestElement(userInput)
})