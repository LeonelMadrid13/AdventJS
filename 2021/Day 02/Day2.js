function listGifts(letter) {
    // ¡Tú puedes!
    var articulos = letter.split(/[ *]/);
    console.log(articulos);

    var regalos = {};

    articulos.forEach(element => {
        if (element !== '') {
            if (element[0] != '_') {
                console.log(element);
                if (regalos[element]) {
                    regalos[element] += 1;
                } else {
                    regalos[element] = 1;
                }
            }
        }
    });
    return regalos;
}


const carta = 'bici coche balón  _playstation bici coche peluche'
const regalos = listGifts(carta)

console.log(regalos)