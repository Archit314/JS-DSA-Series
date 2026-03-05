
class Solution{

    solutionFirst(size, char){

        console.log(`\nSolution First:`);
        
        for(let i = 0; i < size - 1; i++){
            for(let j = 0; j < size; j++){                
                if(i < Math.floor(size/2)){
                    if( ( j > i) && ( j < size - i - 1) ){
                        process.stdout.write(` `)
                        continue;
                    }
                }else{
                    if( ( j >= (size - i - 1)) && ( j <= i)){
                        process.stdout.write(' ')
                        continue;
                    }
                }

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

    const inputData = input.split('\n')

    const size = inputData[0].trim()
    console.log(`Row size of hollow sand watch: ${size}`)

    const character = inputData[1].trim()
    console.log(`Character to print: ${character}`)

    new Solution().solutionFirst(size, character)
})