function sameWeekday(date1, date2) {
    // Get the weekday of each date
  const date_var1 = new Date(date1) 
  const date_var2 = new Date(date2)
    var weekday1 = date_var1.getDay();
    var weekday2 =  date_var2.getDay();
    
    // same weekdays
    return weekday1 === weekday2;
}
var date1 = new Date('2024-04-15'); // Saturday
var date2 = new Date('2024-04-16'); // Sunday
var date3 = new Date('2024-04-18'); // Tuesday

//loging for display
console.log(sameWeekday(date1, date2)); // false (Saturday and SundaY)
console.log(sameWeekday(date1, date3)); // false (Saturday and tuesday)
console.log(sameWeekday(date2, date3)); // false (Sunday and tuesday)