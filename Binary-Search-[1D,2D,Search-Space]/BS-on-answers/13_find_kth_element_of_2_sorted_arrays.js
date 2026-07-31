class Solution {

    findKthElement(arr1, arr2, elementAtIdx){

        // Define valid binary search range for partition in first array
        let low = Math.max(elementAtIdx-arr2.length, 0)
        let high = Math.min(elementAtIdx, arr1.length)

        // Total elements required on the left side
        let left = elementAtIdx

        while(low <= high){

            // Partition position in first array
            let cut1 = Math.floor( (low+high)/2 )

            // Remaining elements needed from second array
            let cut2 = Math.floor(left - cut1)

            // Left element of first partition
            let l1 = cut1 === 0? -Infinity: arr1[cut1 - 1]

            // Left element of second partition
            let l2 = cut2 === 0? -Infinity: arr2[cut2 - 1]

            // Right element of first partition
            let r1 = cut1 === arr1.length? Infinity: arr1[cut1]

            // Right element of second partition
            let r2 = cut2 === arr2.length? Infinity: arr2[cut2]

            // Valid partition found
            // All left elements are smaller than or equal to right elements
            if( l1 <= r2 && l2 <= r1){

                // The largest element on the left side
                // is the K-th smallest element
                return Math.max(l1, l2)
            }

            // Too many elements taken from arr1
            // Move partition to the left
            else if(l1 > r2){
                high = cut1 - 1
            }

            // Need more elements from arr1
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

    // Read two sorted arrays and the K-th position
    const [arrayFirst, arraySecond, searchIdx] = input.split('\n').map((arr, index) => index === 2? Number(arr): arr.split(' ').map(element => Number(element)))

    if(arrayFirst.length > 0 && arraySecond.length > 0){

        // K cannot exceed total number of elements
        if(searchIdx <= arrayFirst.length + arraySecond.length){

            console.log(`Array first: [${arrayFirst}]\nArray Second: [${arraySecond}]\nElement to search: ${searchIdx}`)

            // Always perform binary search on the smaller array
            const result = new Solution().findKthElement(arrayFirst.length > arraySecond.length? arraySecond: arrayFirst, arraySecond.length > arrayFirst.length? arraySecond: arrayFirst, searchIdx)

            console.log(`Kth element is: ${result}`)
        }
        else{
            console.log(`Search index should be <= to the merged array size`)
        }
    }
    else{
        console.log(`Arrays length should be greater then 0`)
    }
})