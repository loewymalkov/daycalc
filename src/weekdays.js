export function getDayOf(dayNumberValue) {
    let dayOfTheWeek = dayNumberValue;
    let day = ""
    if (dayOfTheWeek === 1) {
      day = "Monday";
    } else if (dayOfTheWeek === 2) {
      day = "Tuesday";
    } else if (dayOfTheWeek === 3) {
      day = "Wednesday";
    } else if (dayOfTheWeek === 4) {
      day = "Thursday";
    } else if (dayOfTheWeek === 5) {
      day = "Friday";
    } else if (dayOfTheWeek === 6) {
      day = "Saturday";
    } else {
      day = "Sunday";
    }
    return day;
  }
