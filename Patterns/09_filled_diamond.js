
class Solution{

    solutionFirst(size, char){

        console.log(`\nSolution First:`)

        for(let i = 0; i < size*2; i++){
            for(let j = 0; j < (size*2 - 1); j++){
                if(i < size){
                    if( (j >= (size - i -1)) && (j < (size + i))){
                        process.stdout.write(char)
                    }
                    else{
                        process.stdout.write(' ')
                    }
                }
                else{
                    if( (j >= (i - (size))) && (j < (size*2 - (i - size) - 1))){
                        process.stdout.write(char)
                    }
                    else{
                        process.stdout.write(' ')
                    }
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
    console.log(`Size of the diamond: ${size}`)

    const character = inputData[1].trim()
    console.log(`Character to print: ${character}`)

    new Solution().solutionFirst(size, character)
})