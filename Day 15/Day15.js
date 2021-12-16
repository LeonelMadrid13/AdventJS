function checkSledJump(heights) {
    // ¡No olvides compartir tu solución en redes!
    var original = [...heights];
    var maxValue = Math.max(...heights);
    if (heights.indexOf(maxValue) === (heights.length - 1)) {
        return false;
    }
    var derecha = heights.splice(heights.indexOf(maxValue));
    original.splice(original.indexOf(maxValue) + 1)
    var izquierda = original;
    if ((izquierda.indexOf(maxValue) === izquierda.lastIndexOf(maxValue)) && (derecha.indexOf(maxValue) === derecha.lastIndexOf(maxValue))) {
        function inAscOrder(arr) {
            return arr.every(function (_, i) {
                return i == 0 || arr[i] > arr[i - 1];
            });
        }

        function inDecOrder(arr) {
            return arr.every(function (_, i) {
                return i == 0 || arr[i] < arr[i - 1];
            });
        }
        return inAscOrder(izquierda) === inDecOrder(derecha);
    } else {
        return false
    }
}

console.log(
    '\n', checkSledJump([1, 2, 3, 2, 1]), // true: sube y baja de forma estricta
    '\n', checkSledJump([0, 1, 0]), // -> true: sube y baja de forma estricta
    '\n', checkSledJump([0, 3, 2, 1]), // -> true: sube y baja de forma estricta
    '\n', checkSledJump([0, 1000, 1]), // -> true: sube y baja de forma estricta

    '\n', checkSledJump([2, 4, 4, 6, 2]), // false: no sube de forma estricta
    '\n', checkSledJump([1, 2, 3]), // false: sólo sube
    '\n', checkSledJump([1, 2, 3, 2, 1, 2, 3]), // false: sube y baja y sube... ¡no vale!
);