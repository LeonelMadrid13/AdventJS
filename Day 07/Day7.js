const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}

const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}

const deepAlmacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': {
            'cajon2': {
                'producto1': 'pantalones',
                'producto2': 'camiseta' // <- ¡Está aquí!
            }
        }
    }
}

function contains(store, product) {
    // ¡Y no olvides compartir tu solución en redes!
    var entries = Object.entries(store);
    var estantes = [];
    const toArray = (obj) => {
        const result = [];
        for (const prop in obj) {
            const value = obj[prop];
            if (typeof value === 'object') {
                result.push(toArray(value)); // <- recursive call
            } else {
                result.push(value);
            }
        }
        return result;
    }

    // console.log(entries);
    entries.forEach(entrada => {
        estantes.push(entrada[1]);
    });
    // console.log(estantes);
    var productos = [];
    estantes.forEach(estante => {
        var arrayEstante = toArray(estante);
        // console.log(arrayEstante);
        arrayEstante.forEach(cajon => {
            // console.log(cajon);
            if (cajon !== 'vacio') {
                while (cajon.length == 1) {
                    cajon = cajon[0]
                }
                cajon.forEach(obj => {
                    productos.push(obj)
                })
            }
        })
    });
    console.log(productos.includes(product));
}

function containsRegExp(store, product) {
    // ¡Y no olvides compartir tu solución en redes!
    var strStore = JSON.stringify(store);
    const regex = new RegExp(`:\"${product}\"`, "g");
    return regex.test(strStore);
}

// function toArray(obj) {
//     const result = [];
//     for (const prop in obj) {
//         const value = obj[prop];
//         if (typeof value === 'object') {
//             result.push(toArray(value)); // <- recursive call
//         } else {
//             result.push(value);
//         }
//     }
//     return result;
// }

// console.log(toArray(almacen));
// console.log(toArray(deepAlmacen));



containsRegExp(almacen, 'camiseta') // true
containsRegExp(deepAlmacen, 'camiseta') // true
containsRegExp(otroAlmacen, 'gameboy') // false