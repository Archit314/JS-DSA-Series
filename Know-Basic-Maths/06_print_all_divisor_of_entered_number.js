
class Solution{

    solutionFirst(enteredNumber){

        let allDivisor = [1, enteredNumber]

        for(let i = 2; i * i <= enteredNumber; i++){

            if(enteredNumber % i === 0){

                if(i === enteredNumber/i){
                    allDivisor.push(i)
                }
                else{
                    allDivisor.push(i, (enteredNumber / i))
                }
            }
        }

        return allDivisor
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const userInput = Number(input.trim())
    console.log(`User entered: ${userInput}`)

    const result = new Solution().solutionFirst(userInput)
    console.log(`All divisor of ${userInput}: ${result}`)
})