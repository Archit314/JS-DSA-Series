
class Solution{

    // Solution First Function:
    printRightAngleTriangle1(size, char){

        console.log(`\nSolution 1:`);
        
        for(let i = 1; i <= size; i++){
            console.log(char.repeat(i))
        }
    }

    // Solution Second Function:
    printRightAngleTriangle2(size, char){

        console.log(`\nSolution 2:`);

        for(let i = 1; i <= size; i++){
            for(let j = 1; j <= i; j++){
                process.stdout.write(char)
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

    // Getting input data:
    const inputData = input.split('\n')
    console.log(inputData)

    const size = Number(inputData[0].trim())
    console.log(`Size of n x n matrix: ${size}`)

    const character = inputData[1].trim()
    console.log(`Character to print: ${character}`)

    // Solution First:
    new Solution().printRightAngleTriangle1(size, character)

    // Solution Second:
    new Solution().printRightAngleTriangle2(size, character)
})