import { getDayOf } from './../src/weekdays.js';
describe ('getDayOf', function() {

  it('should test if today is Thursday', function() {
    let testInput = "09/05/2019";
    let testDate = new Date(testInput);
    expect(testDate.getDay()).toEqual(4);
  });

  it('should test that if given day is 0, it should evaluate to "Sunday"', function() {
    let dayNumber = 4;
    let thisDay = getDayOf(dayNumber);
    expect(thisDay).toEqual("Thursday");
  });

});
