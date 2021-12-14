
# Day 12

En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

**La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.**

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado **la lista de posiciones de los obstáculos desordenada...** 😅 aunque al menos nunca **la posición 0 puede tener un obstáculo.**

Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

```javascript
const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/

```

La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto mínimo que nos serviría para sortear todos los obstaculos.

-------------------------------------------

## Pensamientos

al utilizar la operacion modulo (%) podemos revisar si el numero se va a encontrar con el obstaculo al brincar una x longitud
la operacion x % obstaculo nos dice si hay residuo que el numero x no se encuentra entre los multiplos del obstaculo por lo que no se
encuentran nunca, esto lo podemos utilizar para contar cuantas veces este valor no se encuentra con un obstaculo dentro del array
y si el numero es igual al length del array ese es nuestro valor de salto por lo que se regresa

Vamos a utilizar el valor mas grande del array de obstaculos para un ciclo for donde vamos a ir incrementando de 1 en 1
para tener como limite ese valor, si no llega a tener el salto antes de llegar no se va a poder hacer el salto, aunque en la pag aseguran de que siempre debe de haber un numero, por eso se utiliza el max para poder obtener un rango variable para cada array.

```javascript
var max = Math.max(...obstacles)
for(let i = 0; i < max; i++){
    var repeated = 0;
    obstacles.forEach(element => {
        var modulo = obstacle % i;
        if(modulo !== 0){
            repeated++
        }
    })
    if(repeated === obstacles.length){
        return i;
    }
}
```
