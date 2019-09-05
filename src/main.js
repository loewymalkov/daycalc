import { getDayOf } from './weekdays.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#date").submit(function(event) {
    event.preventDefault();
    let input = $('#date-input').val();
    let inputDate = new Date(input);
    let dayNumberValue = inputDate.getDay();
    let output = getDayOf(dayNumberValue);
    $("#dayOutput").text(output);
  });
});
