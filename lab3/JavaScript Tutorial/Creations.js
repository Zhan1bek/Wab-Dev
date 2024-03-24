//1
//new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 )


//2
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 Jan 2014
alert( getWeekDay(date) ); // FR


//3
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}


//4
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28


//5
function getSecondsToday() {
    let now = new Date();

    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
}

alert( getSecondsToday() );


//6
function getSecondsToTomorrow() {
    let now = new Date();

    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
}