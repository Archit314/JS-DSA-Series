
class Solution{

    solutionFirst(size){

        console.log(`Solution First:`)

        for(let i = 0; i < size; i++){
            let num = 0

            for(let j = 0; j < (size * 2); j++){
                if( (j > i) && (j < (size * 2 - i - 1))){
                    process.stdout.write(' ')
                }
                else{
                    if(j < size){
                        num++
                        process.stdout.write(String(num))
                    }
                    else{
                        process.stdout.write(String(num))
                        num--
                    }
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
    
    new Solution().solutionFirst(size)
})