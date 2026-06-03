class Solution{

    findMaxSubArray(array){

        let sum = 0                      // stores current running subarray sum
        let max = -Infinity              // stores maximum subarray sum found so far
        let startIdx = 0                // starting index of best subarray
        let endIdx = 0                  // ending index of best subarray
        let tempStart = 0              // temporary start index for current subarray

        for(let i = 0; i < array.length; i++){

            // if current sum is 0, it means we are starting a new potential subarray
            if (sum === 0) tempStart = i

            sum += array[i]            // include current element in running sum

            // update max sum and store subarray boundaries if new max is found
            if(sum > max){
                max = sum
                endIdx = i
                startIdx = tempStart
            }

            // if running sum becomes negative, discard it (start fresh from next element)
            if(sum < 0){
                sum = 0
            }
            
        }

        // return the subarray corresponding to maximum sum found
        return array.slice(startIdx, endIdx+1) || [0]
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const enteredArray = input.split(' ').map(element => Number(element))  // convert input to array of numbers

    if(enteredArray.length > 1){
        
        console.log(`Entered Array: [${enteredArray}]`)

        // compute and print maximum subarray sum result
        console.log(`Max sub array sum: ${new Solution().findMaxSubArray(enteredArray)}`)
        return
    }

    console.log(`Cannot process empty or single element array`)
})