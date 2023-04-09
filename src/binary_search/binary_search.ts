export const binarySearch = (array: number[], target: number): number => {
    let left = 0
    let right: number = array.length

    while (left < right) {
        // console.log("left: ", left)
        // console.log("right: ", right)
        const mid = (left + right) / 2 | 0
        if (array[mid] == target) {
            return mid
        }
        else if (target < array[mid]) {
            right = mid
        }
        else {
            left = mid + 1
        }
    }
    return -1
};
