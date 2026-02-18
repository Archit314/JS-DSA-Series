
class Solution{

    solutionFirst(size){

        console.log(`\nSolution First:`)

        for(let i = 0; i < size; i++){
            let initialNum = i%2 === 0? true: false

            for(let j = 0; j <= i; j++){
                process.stdout.write(String(Number(initialNum)))
                initialNum = !initialNum
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
    console.log(`Size of the triangle: ${size}`)

    new Solution().solutionFirst(size)
})