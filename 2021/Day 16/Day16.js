function decodeNumbers(symbols) {
    // ¡No olvides compartir tu solución en redes!
    const values = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100,
    }
    var separated = [...symbols]
    var decoded = [];
    separated.forEach(element => {
        if (values[element] !== undefined) {
            decoded.push(values[element])
        }
    });
    if (decoded.length !== separated.length) return NaN;
    for (let i = 1; i < decoded.length; i++) {
        if (decoded[i] > decoded[i - 1]) {
            // console.log(decoded[i]);
            // console.log(decoded[i - 1]);
            decoded[i - 1] *= -1;
        }
    }
    console.log(decoded);
    const sum = decoded.reduce((a, b) => a + b);
    console.log(sum);
    return sum;
}

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN