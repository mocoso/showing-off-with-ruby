var twentyTwentySetUp = false;
var twentyTwentyRunning = false;

function setUpTwentyTwenty()
{
  if (twentyTwentySetUp) { return; }

  twentyTwentySetUp = true;
 
  $("#slideInfo").after('<span id="twentyTwentyInfo"></span>');

  $(document).keydown(function(event) {
    var key = event.keyCode;

    if (event.ctrlKey || event.altKey || event.metaKey) { return; }

    // p to automatically move to the next slide every twenty seconds
    if (key == 80)
    {
      twentyTwenty();
    }
  });
}

// For a 20x20 talk
//
// Will go to the next slide every 20 seconds
function twentyTwenty()
{
  if (!twentyTwentyRunning) {
    twentyTwentyRunning = true
    $("#twentyTwentyInfo").text(twentyTwentyStatus(0));
    var seconds = 0;
    setInterval(function() {
      seconds++;
      $("#twentyTwentyInfo").text(twentyTwentyStatus(seconds));
      if (seconds == 20) {
        seconds = 0;
        nextStep();
      }
    }, 1000);
  }
}

function twentyTwentyStatus(seconds) {
  return ' - 20x20 mode (' + (20 - seconds) + 's)';
}

$(function(){
  setUpTwentyTwenty();
});