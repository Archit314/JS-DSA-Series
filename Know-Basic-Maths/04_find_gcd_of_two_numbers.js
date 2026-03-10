
class Solution{

    solutionFirst(userInputFirst, userInputSecond) {

        let divisor = userInputFirst > userInputSecond? userInputSecond: userInputFirst
        let divident = userInputFirst > userInputSecond? userInputFirst: userInputSecond
        
        while (divisor !== 0) {
            
            let c = divisor
            divisor = divident % divisor
            divident = c
        }
        
        return divident
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {
    
    const inputNumbers = input.split('\n')
    
    const enteredNumberFirst = Number(inputNumbers[0].trim())
    console.log(`Entered Number First: ${enteredNumberFirst}`)
    
    const enteredNumberSecond = Number(inputNumbers[1].trim())
    console.log(`Entered Number Second: ${enteredNumberSecond}`)
    
    const result = new Solution().solutionFirst(enteredNumberFirst, enteredNumberSecond)
    console.log(`GCD of the entered numbers is: ${result}`)
})