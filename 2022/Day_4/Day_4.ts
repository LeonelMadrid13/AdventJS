type size = { l: number, w: number, h: number }

function fitsInOneBox(boxes: size[]) {
    return false
}

fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]) // true

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false