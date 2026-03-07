
class Solution{

    solutionFirst(size){

        console.log(`\nSolution First:`)

        let left = 0
        let right = size - 1

        for(let i = 0; i < size; i++){
            let characterToPrint = Math.floor(size/2 + 1)

            for(let j = 0; j < size; j++){
                
                if(j < left){
                    process.stdout.write(String(characterToPrint)+' ')
                    characterToPrint--
                }
                else if( (j >= left) && (j <= right)){
                    process.stdout.write(String(characterToPrint)+' ')
                }
                else{
                    characterToPrint++
                    process.stdout.write(String(characterToPrint)+' ')
                }
            }

            if(i < Math.floor(size/2)){
                left ++
                right --
            }
            else{
                left --
                right ++
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
    console.log(`Row and column size of square: ${size}`)

    new Solution().solutionFirst(size)
})