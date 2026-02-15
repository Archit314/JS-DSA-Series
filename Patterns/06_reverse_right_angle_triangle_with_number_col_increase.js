
class Solution{

    solutionFirst(size){

        console.log(`\nSolution First:`)

        for(let i = size; i > 0; i--){
            for(let j = 1; j <= i; j++){
                process.stdout.write(String(j))
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

    const size = Number(input.trim())
    console.log(`Row size is: ${size}`)

    new Solution().solutionFirst(size)
})