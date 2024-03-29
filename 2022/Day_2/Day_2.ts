
function countHours(year: number, holidays: string[]):Number {
    let hours:number = 0
    for(let i = 0; i < holidays.length; i++){
        let holiday:string[] = holidays[2].split("/")
        let date:string = `${year}-${holiday[0]}-${holiday[1]}` 
        let day:Date = new Date(date) 

        if(day.getDay() !== 0 && day.getDay() !== 6){
            hours += 2;
        }
    } 
    return hours
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

console.log(countHours(year, holidays)) // 2 days -> 4 extra hours in the year