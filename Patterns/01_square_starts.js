
class Solution{

    // Solution First:
    printPatternSolution1(size, char){

        let printChar = char.repeat(size)

        console.log(`\nSolution 1:`);
        
        while(size > 0){

            console.log(printChar)
            size --
        }
    }

    // Solution Second:
    printPatternSolution2(size, char){

        console.log(`\nSolution 2:`);

        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; j++){
                process.stdout.write(char)
            }

            console.log()
        }
    }

    // Soltion Third:
    printPatternSolution3(size, char){

        console.log(`\nSolution 3:`)

        for(let i = 0; i < size; i++){
            console.log(char.repeat(size))
        }
    }
}

let input = ''
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Getting input data:
    const inputData = input.split('\n')

    // Separating different-different data's:
    const size = Number(inputData[0].trim())
    console.log(`Size of n x m matrix: ${size}`)

    const character = inputData[1]
    console.log(`Character to print: ${character}`)

    // Soluiton First:
    new Solution().printPatternSolution1(size, character)

    // Solution Second:
    new Solution().printPatternSolution2(size, character)

    // Solution Third:
    new Solution().printPatternSolution3(size, character)
})