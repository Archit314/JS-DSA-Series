class Solution{

    canAllocatePages(arr, pages, students){

        // Start allocating books to the first student
        let allocatedStudents = 1

        // Running sum of pages assigned to the current student
        let sum = 0

        // Traverse all books
        for(let i = 0; i < arr.length; i++){

            // If the current book can be assigned without
            // exceeding the page limit, assign it
            if(sum + arr[i] <= pages){
                sum += arr[i]
            }

            // Otherwise allocate the current book to a new student
            else{
                allocatedStudents++
                sum = arr[i]
            }
        }

        // Return true if all books can be allocated
        // using at most the given number of students
        return allocatedStudents <= students
    }

    allocateMinimumPagesAmongMax(arr, students){

        // Minimum possible answer is the largest book
        let low =  Math.max(...arr)

        // Maximum possible answer is when one student
        // gets all the books
        let high = arr.reduce((sum, currentValue) =>
            sum + currentValue
        )

        // Binary search on the answer (maximum pages)
        while (low <= high) {

            let mid = Math.floor((low + high) / 2)

            // If current page limit is not sufficient,
            // increase the limit
            if(!this.canAllocatePages(arr, mid, students)){
                low = mid + 1
            }

            // Otherwise try to minimize the answer
            else{
                high = mid - 1
            }

        }

        // 'low' stores the minimum possible maximum pages
        return low
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Read books array and number of students
    const [bookWithPages, totalStudents] = input.split('\n').map((col, index) => 
        index === 0? col.split(' ').map(element => Number(element)): Number(col)
    )

    if(bookWithPages.length > 1){

        console.log(`Books with pages:`, bookWithPages)

        if(!isNaN(totalStudents)){

            // Every student must get at least one book
            if(totalStudents <= bookWithPages.length){

                console.log('Total Students:', totalStudents)

                // Find the minimum possible maximum pages
                console.log(`Minimum pages allocate among maximum allocated pages: ${new Solution().allocateMinimumPagesAmongMax(bookWithPages, totalStudents)}`)
            }
            else{
                console.log('Students cannot be greater than total books')
            }
        }
        else{
            console.log('Cannot process non integer value')
        }
    }
    else{
        console.log('Cannot process single element or empty array')
    }

    return
})