class Solution {

    findMajorityElement(array){

        let count = 0
        let element = 0

        for(let arrVal of array){
            // console.log(element)

            // If count becomes 0, we pick a new candidate element
            if(count === 0){
                count++              // start counting this new candidate
                element = arrVal     // assign current value as candidate
            }
            // If current value matches the candidate, increase its strength
            else if(element === arrVal){
                count++
            }
            // If current value is different, it cancels out one occurrence of candidate
            else{
                count--
            }
        }

        // After full traversal, 'element' holds the majority candidate
        return element
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const enteredArray = input.split(' ').map(element => Number(element))

    // Only process if array has more than 1 element
    if(enteredArray.length > 1){

        console.log(`Entered Array: [${enteredArray}]`)
        console.log(`Majority element which occurs N/2 times is: ${new Solution().findMajorityElement(enteredArray)}`)
        return
    }

    console.log(`Cannot process single or empty element array`)
    return
})