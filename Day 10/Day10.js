function getCoins(change) {
    // ¡No olvides compartir tu solución en redes!
    var cambio = [0, 0, 0, 0, 0, 0];
    var monedas = [1, 2, 5, 10, 20, 50]
    while (change != 0) {
        var divided = [];
        monedas.forEach(element => {
            divided.push(Math.floor(change / element));
        });
        // console.log(divided);
        var min = Math.min(...divided);
        if (min === 0) {
            var filtrado = divided.filter(x => x > 0);
            // console.log(filtrado);
            min = Math.min(...filtrado);
        }
        var minIndex = divided.indexOf(min);
        cambio[minIndex] = min;
        change -= (min * monedas[minIndex]);
    }
    return cambio;
}


getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos