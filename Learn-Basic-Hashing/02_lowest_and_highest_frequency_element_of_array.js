/**
 * Find highest and lowest frequency elements in an array
 * Approach:
 * 1. Use a Map to store frequency of each element
 * 2. Traverse the map to find:
 *    - Element with highest frequency
 *    - Element with lowest frequency
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
class Solution{

    // Map to store element -> frequency
    newMap

    constructor(inputArray){

        this.newMap = new Map()
        
        // Build frequency map
        for(let i = 0; i < inputArray.length; i++){
            this.newMap.set(inputArray[i], (this.newMap.get(inputArray[i]) || 0) + 1)
        }
    }

    /**
     * Prints highest and lowest frequency elements
     */
    gethighAndLowElement(){

        // Get element with lowest frequency
        const lowestFrequencyElement = this.getSmallestElement()

        // Get element with highest frequency
        const highestFrequencyElement = this.getHighestElement()

        console.log(`Highest frequency element: ${highestFrequencyElement}`)
        console.log(`Lowest frequency element: ${lowestFrequencyElement}`)
    }

    /**
     * Finds element with minimum frequency
     * @returns {number} element with lowest frequency
     */
    getSmallestElement(){

        let smallestElementFrequency = Infinity
        let smallestElement

        // Iterate over map entries [element, frequency]
        for(let [key, value] of this.newMap){

            // Update if smaller frequency is found
            if(value < smallestElementFrequency){
                smallestElementFrequency = value
                smallestElement = key
            }
        }

        return smallestElement
    }

    /**
     * Finds element with maximum frequency
     * @returns {number} element with highest frequency
     */
    getHighestElement(){

        let highestElementFrequency = 0
        let highestElement
        
        // Iterate over map entries [element, frequency]
        for(let [key, value] of this.newMap){

            // Update if higher frequency is found
            if(value > highestElementFrequency){
                highestElementFrequency = value
                highestElement = key
            }
        }

        return highestElement
    }
}

let input = ''

// Taking user input:
process.stdin.on('data', data => {
    input += data
})

// Processing user input:
process.stdin.on('end', () => {

    const enteredArray = input.split(' ').map(element => Number(element.trim()))
    console.log(`Entered Array: ${enteredArray}`)

    if(enteredArray.length === 0){
        console.log(`Invalid input`)
        return
    }

    new Solution(enteredArray).gethighAndLowElement()
})