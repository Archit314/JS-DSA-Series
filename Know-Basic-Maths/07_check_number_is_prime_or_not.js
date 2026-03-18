
class Solution{

    solutionFirst(enteredNumber){

        for(let i = 2; i <= (enteredNumber / i); i++){

            if(enteredNumber % i === 0){
                return false
            }
        }

        return true
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const userInput = Number(input.trim())
    console.log(`User input: ${userInput}`)

    if(userInput === 0 || userInput === 1){
        console.log(`Is ${userInput} a prime number: false`)
        return
    }

    const result = new Solution().solutionFirst(userInput)
    console.log(`Is ${userInput} a prime number: ${result}`)
})