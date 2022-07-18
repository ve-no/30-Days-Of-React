// 1. Write a code which can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F
// 1. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn. 0 - 2
//    - December, January or February, the season is Winter. 3 - 5
//    - March, April or May, the season is Spring 6 -8
//    - June, July or August, the season is Summer 9 - 11
// 1. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
// ```

// 1. Write a code which can give grades to students according to theirs scores:
const grades = function(x)
{
    let grade = 0;
    if (x <= 100 && x >=0) {
        (x >= 80 && x <= 100 ) ? grade = 'A' :
        (x >= 70 && x <= 79) ? grade = 'B' :
        (x >= 60 && x <= 69) ? grade = 'C' :
        (x >= 50 && x <= 59)? grade = 'D' :
            grade = 'F' 
    }
    return grade
   
}
// console.log(grades(80));

// 1. Check if a day is weekend day or a working day. Your script will take day as an input.
// console.log(months.indexOf('November'));
const season = function(month)
{
    let ind = (mon) => months.indexOf(mon)
    const months = ['September', 'October', 'November','December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
    month = month[0].toUpperCase() + month.slice(1).toLowerCase()
    return  (ind(month) >= 0 && ind(month) <= 2) ? 'Autumn' :
            (ind(month) >= 3 && ind(month) <= 5) ? 'Winter' :
            (ind(month) >= 6 && ind(month) <= 8) ? 'Spring' :
            (ind(month) >= 9 && ind(month) <= 11) ? 'Summer' :
            'Not in '
}
// console.log(season('deceMber')); 

// 1. Check if a day is weekend day or a working day. Your script will take day as an input.
const working = (day) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    day = day[0].toUpperCase() + day.slice(1).toLowerCase()
    let ind = (dd) => days.indexOf(dd)
   return (ind(day) === 5 || ind(day) === 6) ? `${day} is a weekend` :
            (ind(day) >= 0 && ind(day) <= 4) ? `${day} is a working day` :
            'is not a day of a week'
}
console.log(working('mondAy')); 
