class Solution {

    removeOuterMostParentheses(inputString){

        // Stores the final string after removing outermost parentheses
        let result = ''

        // Tracks the current nesting level (depth) of parentheses
        let level = 0

        for(let element of inputString){

            // If current character is an opening parenthesis
            if(element === '('){

                // Add it only if we are already inside a primitive
                // (skip the outermost opening parenthesis)
                if(level > 0){
                    result += element
                }

                // Increase nesting level
                level++
            }
            else{
                
                // Decrease nesting level first because we are closing a parenthesis
                level --

                // Add it only if we are still inside a primitive
                // (skip the outermost closing parenthesis)
                if(level > 0){
                    result += element
                }                
            }
        }

        // Return the resultant string after removing all outermost parentheses
        return result
    }
}

let input = ''

// Read input from stdin
process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () =>{

    const enteredString = input
    
    if (enteredString.length > 1) {

        console.log(`Entered String: ${enteredString}`)
        console.log(`Resultant string after removing first and last parentheses: ${new Solution().removeOuterMostParentheses(enteredString)}`)
        return
    }

    console.log(`Cannot process empty string`)
    return
})