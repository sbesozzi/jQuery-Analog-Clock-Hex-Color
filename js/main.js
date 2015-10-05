
(function () {

window.setInterval (function () {

// Set clock  variables

var clock = new Date();
  //console.log(clock);

var hrs = clock.getHours();

  //console.log(hrs);

var mins = clock.getMinutes();
  //console.log(mins);
var digitmin=(mins <10) ? "0" + mins : mins;

var secs = clock.getSeconds();
var digitsec = (secs <10) ? "0" + secs : secs;
 // console.log(secs);


// Set hrs min & secs to 2 digits
// Display the clock

var display = hrs + ":"+ digitmin+ ":" + digitsec;
  


// Make clock work with set.Interval function
// jQuery display text in clock id

$ ('#clock').text(display);

// Run every milisecond

},1000 );


})();