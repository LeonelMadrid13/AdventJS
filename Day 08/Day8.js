function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
    let arr = [...prices];
    let max = Math.max(...prices);
    let min = Math.min(...prices);
    if (max == min) {
        return -1
    }
    if (arr.indexOf(min) === arr.length - 1) {
        arr.pop();
        min = Math.min(...arr);
    }
    while (arr.indexOf(max) < arr.indexOf(min)) {
        arr.shift();
        max = Math.max(...arr);
        if (arr.length == 1) {
            return -1;
        }
        // console.log(max);
    }
    return max - min;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
var btc = maxProfit(pricesBtc)
console.log('BTC: ' + btc)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]
var eth = maxProfit(pricesEth)
console.log('ETH: ' + eth)

const pricesDoge = [18, 15, 12, 11, 9, 7]
var doge = maxProfit(pricesDoge)
console.log('DOGE: ' + doge)

const pricesAda = [3, 3, 3, 3, 3]
var ada = maxProfit(pricesAda)
console.log('ADA: ' + ada)


// console.log(Math.max(pricesAda))