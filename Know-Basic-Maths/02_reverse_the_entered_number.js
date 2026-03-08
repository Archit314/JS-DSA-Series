
class Solution{

    solutionFirst(userInput){

        let remainder
        let reversedNumber = 0

        while(userInput !== 0){

            remainder = Math.floor(userInput % 10)
            reversedNumber = ( (reversedNumber*10) + remainder)

            userInput = Math.floor(userInput / 10)
        }

        return reversedNumber;
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputNumber = Number(input.trim())
    console.log(`Entered number: ${inputNumber}`)

    const result = new Solution().solutionFirst(inputNumber)
    console.log(`Reversed number of an entered number: ${result}`)
})