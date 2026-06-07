class Solution {

    findLongestCommonPrefix(inputArray){

        // Sort the array lexicographically
        // After sorting, the common prefix of the entire array
        // will be the common prefix between the first and last strings
        inputArray.sort()

        let idx = 0

        // Smallest string in lexicographical order
        let str1 = inputArray[0]

        // Largest string in lexicographical order
        let str2 = inputArray[inputArray.length - 1]

        // Stores the longest common prefix
        let result = ''

        // Compare characters of first and last strings
        // until a mismatch is found or one string ends
        for(idx; idx < str1.length && idx < str2.length; idx++){

            // If characters do not match,
            // return the prefix built so far
            if(str1[idx] !== str2[idx]){

                return result
            }

            // Add matching character to the result
            result += str1[idx]
        }

        // Return the complete common prefix
        return result
    }
}

let input = ''

process.stdin.on('data', data => {
    // Collect input from stdin
    input += data
})

process.stdin.on('end', () => {

    // Convert input into an array of strings
    const enteredArray = input.split(' ').map(element => (element))

    if(enteredArray.length > 1){

        console.log(`Entered Array: [${enteredArray}]`)
        console.log(`Longest common prefix: ${new Solution().findLongestCommonPrefix(enteredArray)}`)
        return
    }

    console.log(`Cannot process single element array or empty array`)
    return
})