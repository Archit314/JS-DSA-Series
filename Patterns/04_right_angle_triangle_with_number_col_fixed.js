
class Solution{

    solutionFirst(size){

        console.log(`\nSolution First:`)

        for(let i = 1; i <= size; i++){
            for(let j = 1; j <= i; j++){
                process.stdout.write(String(i))
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

    const size = Number(input)
    console.log(`Row size of a right angle triangle: ${size}`)
    
    new Solution().solutionFirst(size)
})