
class Solution{

    solutionFirst(size, char){

        console.log(`\nSolution First:`);
        
        for(let i = size; i > 0; i--){
            console.log(char.repeat(i))
        }
    }
}

let input = ''
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    const inputData = input.split('\n')

    const size = Number(inputData[0].trim())
    console.log(`Row size is: ${size}`);

    const character = inputData[1].trim()
    console.log(`Character to print: ${character}`)

    new Solution().solutionFirst(size, character)
})