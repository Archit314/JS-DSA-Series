class Solution {

    findElement(array){

        // Initialize result with 0 because:
        // 0 ^ x = x
        let result = 0

        // XOR every element of the array
        // Duplicate elements cancel each other:
        // x ^ x = 0
        // Only the element appearing once remains at the end
        for(let element of array){
            result ^= element
        }

        // Return the unique element
        return result
    }
}

let input = ''

// Read input data from stdin
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Convert space-separated input into an array of numbers
    const enteredArray = input.split(' ').map(element => Number(element))

    // Process only if array contains more than one element
    if(enteredArray.length > 1){
        
        console.log(`Entered Array: [${enteredArray}]`)

        // Find the element that appears only once
        const result = new Solution().findElement(enteredArray)

        console.log(`Elements that appears only 1 time: ${result}`)
        return
    }

    // Handle invalid input cases
    console.log(`Cannot process single element or empty array`)
    return
})