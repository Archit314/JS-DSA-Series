class Solution{

    findTwoSum(array, num){

        // HashMap to store array elements and their indices
        let dummyHashMap = new Map()

        for(let i = 0; i < array.length; i++){

            // Check if the complement required to form the target sum
            // already exists in the HashMap
            if(dummyHashMap.has(num - array[i])){
                return true
            }

            // Store the current element and its index in the HashMap
            dummyHashMap.set(array[i], i)
        }

        // No pair found whose sum equals the target value
        return false
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputData = input.split('\n')

    // Convert the first line of input into an array of numbers
    const enteredArray = inputData[0].split(' ').map(element => Number(element))

    // Process only if the array contains more than one element
    if(enteredArray.length > 1){

        console.log(`Entered Array: [${enteredArray}]`)

        // Read the target sum from the second line of input
        const searchNum = Number(inputData[1])

        if(searchNum){

            console.log(`Search pair of 2 number exists in array which on additon becomes: ${searchNum}`)

            // Check whether a valid pair exists in the array
            console.log(`Is pair available: ${new Solution().findTwoSum(enteredArray, searchNum)}`)
        }
        else{
            console.log(`Please provide the searching number`)
        }
    }
    else{
        console.log(`Cannot process empty or single element array`)
    }

    return
})