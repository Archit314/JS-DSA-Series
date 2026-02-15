
class Solution{

    solutionFirst(size){

        console.log(`\nSolution 1:`)

        for(let i = 1; i <= size; i++){
            for(let j = 1; j <= i; j++){
                process.stdout.write(String(j))
            }

            console.log();
        }
    }
}

let input = ''
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Getting Input data:
    const inputData = input.split('\n')

    const size = Number(inputData[0].trim())
    console.log(`Length of a triangle: ${size}`)

    // Processing Solution First:
    new Solution().solutionFirst(size)
})