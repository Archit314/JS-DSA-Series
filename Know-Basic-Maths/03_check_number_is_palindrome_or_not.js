
class Solution{

    solutionFirst(userInput){

        let quotient = userInput
        let result = 0
        let remainder
        while(quotient !== 0){
            remainder = Math.floor(quotient % 10)
            quotient = Math.floor(quotient / 10)

            result = result*10 + remainder
        }

        return userInput === result || false
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const enteredNumber = Number(input.trim())
    console.log(`Entered number: ${enteredNumber}`)

    const isNumberPalindrome = new Solution().solutionFirst(enteredNumber)
    console.log(`Is ${enteredNumber} a palindrome number: ${isNumberPalindrome}`)
})