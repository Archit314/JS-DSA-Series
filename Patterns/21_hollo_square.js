
class Solution{

    solutionFirst(size, char){

        console.log(`\nSolution First:`)

        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; j++){
                if( i === 0 || i === size - 1 || j === 0 || j === size - 1){
                    process.stdout.write('*')
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

    const size = inputData[0].trim()
    console.log(`Row and column size of square: ${size}`)

    const character = inputData[1].trim()
    console.log(`Character to print: ${character}`)

    new Solution().solutionFirst(size, character)
})