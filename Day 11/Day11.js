// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    var n = times;
    var ticketPrice = 12;
    var singleTickets = ticketPrice * n;
    var discount = 0.75;
    var fidelidad = 250;

    for (let i = 1; i <= n; i++) {
        fidelidad += (ticketPrice * Math.pow(discount, i));
    }

    return fidelidad < singleTickets;
}

console.log(shouldBuyFidelity(10));