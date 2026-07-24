class Solution{

    getMaxDistance(arr){

        // Find the maximum distance between any two adjacent gas stations
        let maxDiff = -1
        for(let i = 0; i < arr.length - 1; i++){

            let diff = arr[i+1] - arr[i]
            maxDiff = Math.max(diff, maxDiff)
        }

        return maxDiff
    }

    getRequiredGasStations(arr, dis){

        // Count the minimum number of new gas stations required
        // so that no adjacent distance exceeds 'dis'
        let totalGasStationRequired = 0
        for(let i = 0; i < arr.length - 1; i++){

            // Calculate how many sections this gap can be divided into
            let sections = Math.floor((arr[i+1] - arr[i])/dis)

            // If the gap is exactly divisible by 'dis',
            // one section is already formed by existing stations,
            // so reduce the required new stations by one
            if( (arr[i+1] - arr[i]) === sections * dis){
                sections--
            }

            totalGasStationRequired += sections
        }

        return totalGasStationRequired
    }

    findMinimumDistance(arr, totalGasStations){

        // Search space:
        // Minimum possible distance = 0
        // Maximum possible distance = largest existing gap
        let low = 0
        let high = this.getMaxDistance(arr)

        // Binary search on the answer (distance)
        while( high - low > 1e-6){

            let mid = (low+high)/2

            let totalGasStationRequired = this.getRequiredGasStations(arr, mid)

            // If more stations are required than available,
            // increase the allowed maximum distance
            if(totalGasStationRequired > totalGasStations){
                low = mid
            }

            // Otherwise, try to minimize the distance further
            else{
                high = mid
            }
        }

        // Smallest possible maximum distance
        return high
    }
}

let input = ''

process.stdin.on('data', data => {
    input += data
})

process.stdin.on('end', () => {

    // Read and parse input
    const lines = input.trim().split('\n')
    const existingGasStation = lines[0].trim().split(' ').filter(Boolean).map(Number)
    const newGasStations = Number(lines[1])

    // At least two existing gas stations are required
    if(existingGasStation.length <= 1){
        console.log('Cannot process single element array')
        return 0
    }

    console.log(`Existing Gas Stations: [${existingGasStation}]\nTotal Number of gas stations to install: ${newGasStations}`)

    // Find the minimized maximum distance
    const result = new Solution().findMinimumDistance(existingGasStation, newGasStations)

    console.log(`Minimizing the max distance to gas stations is:`, result)
})