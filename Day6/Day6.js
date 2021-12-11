function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if ((numbers[i] + numbers[j]) == result) {
                return [numbers[i], numbers[j]]
            }
        }
    }
    return null
}

console.log(sumPairs([3, 5, 7, 2], 10));
console.log(sumPairs([-3, -2, 7, -5], 10));