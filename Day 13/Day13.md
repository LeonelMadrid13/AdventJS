# Day 13

¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...

```javascript
wrapGifts(["📷", "⚽️"])
/* Resultado:
[ 
    '****',
    '*📷*',
    '*⚽️*',
    '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ 
    '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ 
    '****',
    '*📷*',
    '****'
]
*/
```

-------------------------------------------

## Pensamientos

los emojis (🤲) no importa cual sea, tienen una longitud de 2 caracteres y con la supocision de que todos las pocisiones del array siempre tienen la misma cantidad de emojis, podemos obtener la cantidad de asteriscos intermedios a agregar:

```javascript
var gift = ['🧅','🤲'];
/*
    en este caso el length de cada nivel del regalo es 2
    por lo que el numero de asteriscos entre los laterales es de 2 
    y el total de asteriscos es 4 quedando un resultado final:
    [
        ****,
        *🧅*,
        *🤲*,
        ****
    ]
*/
```
