
class Solution{

    solutionFirst(size){

        console.log(`\nSolution First:`)

        for(let i = 0; i < size; i ++){
            let num = 65

            for(let j = 0; j < (size - i); j++){
                process.stdout.write(String.fromCharCode(num+j)+' ')
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

    const inputData = input.split()

    const size = Number(inputData[0].trim())
    console.log(`Row size of triangle: ${size}`)

    new Solution().solutionFirst(size)
})