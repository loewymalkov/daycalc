import $ from 'jquery';


export function getDayOf(inputDate){
    let dayOfTheWeek = inputDate.getDay()
    if (dayOfTheWeek === 1) {
      $("#dayOutput").text("Monday");
    } else if (dayOfTheWeek === 2) {
      $("#dayOutput").text("Tuesday");
    } else if (dayOfTheWeek === 3) {
      $("#dayOutput").text("Wednesday");
    } else if (dayOfTheWeek === 4) {
      $("#dayOutput").text("Thursday");
    } else if (dayOfTheWeek === 5) {
      $("#dayOutput").text("Friday");
    } else if (dayOfTheWeek === 6) {
      $("#dayOutput").text("Saturday");
    } else {
      $("#dayOutput").text("Sunday");
    }
    return console.log("this worked!");
  }
