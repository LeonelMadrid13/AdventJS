# Day 14

¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

```javascript
missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
```

Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?

-------------------------------------------

## Pensamientos

como la complejidad minima del reto es O(n) podemos hacerlo con un simple for, recorriendo todos los valores del array
y como van del 0 a n cantidad de renos, podemos ver si el array contiene el valor de i

```javascript
for (let i = 0; i <= ids.length; i++) {
        if (!ids.includes(i)) {
            console.log(i);
            return i
        }
    }
```
