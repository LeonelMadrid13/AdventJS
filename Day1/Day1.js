function contarOvejas(ovejas) {
    // aquí tu magia
    filtered = []
    ovejas.forEach( oveja => {
        if(oveja.color === 'rojo'){
            var name = oveja.name;
            if(name.match(/[a,n]/)){
                filtered.push(oveja);
            }    
        }
    });
    return filtered
}


const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
];

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]