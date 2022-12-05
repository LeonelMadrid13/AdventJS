
# Day 11

[adventJS.dev](https://adventjs.dev/challenges/10)

Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

- Entrada de un sólo uso: Cuesta 12$ por cada película.

- Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:

``` javascript
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
```

Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

``` javascript
shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
```

La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad. 😜

-------------------------------------------

## Pensamientos

-shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
    - ticket normales = 12$ *1 = 12$

- fidelidad = 250$ + (12$* 0.75) = 259$

- shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
  - ticket normales = 12$ * 100 = 1200$
  - fidelidad = 250$ + (12$ *0.75) + (12$* 0.75 *0.75) + ... + (12$* 0.75 *...* 0.75)
  - fidelidad = 250$ + ∑(12$ * 0.75^n)
    - sumatoria i = n donde n es igual al numero de tickets
en este ejemplo n = 100, entonces es la sumatoria de los 12$ del ticket multiplicado
por el 75% elevado a la i

Una posible solucion es utilizar Math.pow() dentro de un for loop donde se sume a una variable el valor obtenido del Math.pow()

```javascript
var n = times;
var ticketPrice = 12;
var singleTicket = ticketPrice * n;
var fidelidad = 250;
for(let i = 1; i <= n; i++){
    fidelidad += Math.pow(ticketPrice, i);
}
return fidelidad < singleTicket;
```
