
class Solution{

    solutionFirst(userInput){

        let count = 0

        while(userInput !== 0){
            userInput = Math.floor(userInput / 10)
            count++
        }

        return count
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputNumber = Number((input).trim())
    console.log(`Entered number: ${inputNumber}`)

    const result = new Solution().solutionFirst(inputNumber)
    console.log(`Total number of digits in the entered number: ${result}`)
})