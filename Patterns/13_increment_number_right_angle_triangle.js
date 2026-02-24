
class Solution{

    solutionFirst(size){

        console.log(`Solution First:`)

        let count = 1
        for(let i = 0; i < size; i++){
            for(let j = 0; j <= i; j++){
                process.stdout.write(String(count)+' ')
                count++
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
    console.log(`Row Size of a triangle: ${size}`)

    new Solution().solutionFirst(size)
})