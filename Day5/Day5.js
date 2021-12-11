function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const christmasDate = new Date('Dec 25, 2021');
    return Math.ceil((christmasDate - date) / 86400000);
}


const date1 = new Date('Dec 26, 2021')
console.log(daysToXmas(date1), '\n') // -1
const date2 = new Date('Dec 31, 2021')
console.log(daysToXmas(date2), '\n') // -6
const date3 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date3), '\n') // -7
const date4 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date4), '\n') // -7