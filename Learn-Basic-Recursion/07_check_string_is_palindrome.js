/**
 * Check whether the entered string is palindrome or not?
 * @param {string} word - User entered string
 * @param {number} leftPtr - left index of the entered string
 * @param {number} rightPtr - right index of the entered string
 */
class Solution{

    checkPalindrome(word, leftPtr, rightPtr){

        // Base condition: Stop recursive call when leftPtr and rightPtr crosses each other
        if(leftPtr >= rightPtr) return true

        // Return false to stop code execution when left ptr crosses right ptr
        if(word[leftPtr] !== word[rightPtr]){
            return false
        }

        return this.checkPalindrome(word, leftPtr + 1, rightPtr - 1)
    }
}

let input = ''

// Collecting user input:
process.stdin.on('data', data => {
    input += data
})

// Processing user input:
process.stdin.on('end', () => {

    const enteredWord = input.trim()
    console.log(`Entered String: ${enteredWord}`)

    // If string is empty stop exeuction and return false
    if(enteredWord.length <= 0){
        console.log(`Invalid string`)
        return
    }

    const result = new Solution().checkPalindrome(enteredWord, 0, enteredWord.length - 1)
    console.log(`Entered string is palindrome? - ${result}`)
})