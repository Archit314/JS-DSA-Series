
class Solution{

    solutionFirst(size){

        console.log(`\nSolution First:`);

        for(let i = 0; i < size; i++){
            let num = 64

            for(let j = 0; j < (size*2); j++){
                if( (j >= (size - i - 1)) && (j < (size+i)) ){

                    if(j<size){
                        num++
                        process.stdout.write(String.fromCharCode(num))
                    }
                    else{
                        num--
                        process.stdout.write(String.fromCharCode(num))
                    }
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

    const size = Number(inputData[0].trim())
    console.log(`Row size of triangle: ${size}`)

    new Solution().solutionFirst(size)
})