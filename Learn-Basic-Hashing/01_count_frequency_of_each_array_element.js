/**
 * Count frequency of each array element:
 * @param {number[]} inputArray - The array of numbers to analyze
 */
class Solution{

    findFrequencyOfArrayElement(inputArray){
        
        let arrayMap = new Map()

        for(let i = 0; i < inputArray.length; i++){

            arrayMap.set(inputArray[i], (arrayMap.get(inputArray[i]) || 0) + 1)
        }

        // Iteration on map using for of loop:
        for(let [key, value] of arrayMap){
            console.log(`${key} repeats ${value} times`)
        }
        
        // Iteration on map using foreach loop:
        arrayMap.forEach((value, key) => {
            console.log(key, value)
        })
    }
}

let input = ''

// Collecting user input:
process.stdin.on('data', data => {
    input += data
})

// Processing user input after it has been completely received:
process.stdin.on('end', () => {

    const userInput = input.split(' ').map(element => Number(element.trim()))
    console.log(`Entered array: [${userInput}]`)

    // Guard: Check if user input is empty
    if(userInput.length === 0){
        console.log(`No input provided`)
        return
    }

    new Solution().findFrequencyOfArrayElement(userInput)
})