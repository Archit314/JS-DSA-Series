
class Solution{

    firstSolution(userInput) {
        
        const actualInputNumber = String(userInput)
        let sumOfDigits = 0
        
        while (userInput !== 0) {
            
            let remainder = userInput%10
            userInput = Math.floor(userInput / 10)
            sumOfDigits += remainder**actualInputNumber.length
        }
        
        return Number(actualInputNumber) === sumOfDigits
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {
    
    const enteredNumber = Number(input.trim())
    console.log(`Entered Number: ${enteredNumber}`)
    
    const result = new Solution().firstSolution(enteredNumber)
    console.log(`Is entered number an armstrong number: ${result}`)
})