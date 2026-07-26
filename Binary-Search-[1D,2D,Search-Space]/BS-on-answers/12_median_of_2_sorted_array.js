class Solution{

    findMedianSortedArrays(arr1, arr2){

        // Apply binary search on the smaller array
        let low = 0
        let high = arr1.length

        // Total elements that should be present in the left partition
        let totalElement = (arr1.length + arr2.length + 1)/2

        while(low <= high){

            // Partition index for first array
            let cut1 = Math.floor( (low+high)/2 )

            // Partition index for second array
            let cut2 = Math.floor(totalElement - cut1)

            // Left element of first partition
            // If partition is at beginning, assume -Infinity
            let l1 = cut1 === 0? -Infinity: arr1[cut1 - 1]

            // Left element of second partition
            let l2 = cut2 === 0? -Infinity: arr2[cut2 - 1]

            // Right element of first partition
            // If partition is at end, assume Infinity
            let r1 = cut1 === arr1.length? Infinity: arr1[cut1]

            // Right element of second partition
            let r2 = cut2 === arr2.length? Infinity: arr2[cut2]

            // Correct partition found
            if( (l1 <= r2) && (l2 <= r1) ){

                // For even total elements,
                // median is the average of middle two elements
                if( ((arr1.length + arr2.length) % 2 === 0)){
                    return ( (Math.max(l1, l2)) + (Math.min(r1, r2)) ) / 2
                }

                // For odd total elements,
                // median is the maximum element from left partition
                else{
                    return Math.max(l1, l2)
                }
            }

            // Move partition to the left
            else if(l1 > r2){
                high = cut1 - 1
            }

            // Move partition to the right
            else{
                low = cut1 + 1
            }
        }
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Read both sorted arrays from input
    const [firstArray, secondArray] = input.split('\n').map(arr => arr.split(' ').map(element => Number(element)))
    
    if(firstArray.length > 0 && secondArray.length > 0){

        console.log(`First Array: [${firstArray}]\nSecond Array: [${secondArray}]`)

        // Always perform binary search on the smaller array
        console.log(`Median is: ${new Solution().findMedianSortedArrays(firstArray.length > secondArray.length? secondArray: firstArray, secondArray.length > firstArray.length? secondArray: firstArray)}`)
    }
    else{
        console.log(`Array's should not be empty`)
    }

    return
})