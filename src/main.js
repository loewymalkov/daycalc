import { getDayOf } from './weekdays.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#date").submit(function(event) {
    event.preventDefault();
    console.log('loaded submit function');
    let input = $('#date-input').val();
    let inputDate = new Date(input);
    getDayOf(inputDate);
  });
});
