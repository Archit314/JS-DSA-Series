
class Solution{

    solutionFirst(size){

        console.log(`\nSolution First:`);
        
        for(let i = size; i > 0; i--){
            for(let j = 0; j <= size - i; j++){
                process.stdout.write(String.fromCharCode(64 + i + j)+' ')
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
    console.log(`Row length of triangle: ${size}`);
    
    new Solution().solutionFirst(size)
})