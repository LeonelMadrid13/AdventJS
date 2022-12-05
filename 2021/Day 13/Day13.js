function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    var emojiLength = gifts[0].length;
    var resultado = ['*'.repeat(emojiLength + 2)]
    gifts.forEach(element => {
        resultado.push(`*${element}*`)
    });
    resultado.push('*'.repeat(emojiLength + 2))
    return resultado;
}


console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ 
    '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
]
*/