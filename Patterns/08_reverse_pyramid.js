
class Solution{

    solutionFirst(size, char){

        console.log(`\nSolution First:`);
        for(let i = 0; i < size; i++){
            for(let j = 0; j < ((size*2 - 1)); j++){
                if( (j >= i) && (j < (size*2 - i - 1))){
                    process.stdout.write(char)
                }
                else{
                    process.stdout.write(' ')
                }
            }

            console.log()
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
    console.log(`Size of the reverse pyramid: ${size}`);

    const character = inputData[1]
    console.log(`Character to print: ${character}`)

    new Solution().solutionFirst(size, character)
})