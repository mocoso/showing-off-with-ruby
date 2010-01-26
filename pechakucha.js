var pechaKuchaSetUp = false;
var pechaKuchaRunning = false;

function setUpPechaKucha()
{
  if (pechaKuchaSetUp) { return; }

  pechaKuchaSetUp = true;

  $("#slideInfo").after('<span id="pechaKuchaInfo"></span>');

  $(document).keydown(function(event) {
    var key = event.keyCode;

    if (event.ctrlKey || event.altKey || event.metaKey) { return; }

    // p for a pecha-kucha 20x20 talk http://www.pecha-kucha.org/
    if (key == 80)
    {
      pechaKucha();
    }
  });
}

// For a pecha-kucha 20x20 talk
//
// Will go to the next slide every 20 seconds
//
// See http://www.pecha-kucha.org/ for more details
function pechaKucha()
{
  pechaKuchaRunning = true
  $("#pechaKuchaInfo").text(pechaKuchaStatus(0));
  if (pechaKuchaRunning) {
    var seconds = 0;
    setInterval(function() {
      seconds++;
      $("#pechaKuchaInfo").text(pechaKuchaStatus(seconds))
      if (seconds == 20) {
        seconds = 0;
        nextStep();
      }
    }, 1000);
}
}

function pechaKuchaStatus(seconds) {
  if (pechaKuchaRunning) {
    if (seconds > 14) {
      var transitionCountDown = ' (' + (20 - seconds) + ')';
    } else {
      var transitionCountDown = '';
    }
    return ' - 20x20 mode' + transitionCountDown;
  }
}

$(function(){
  setUpPechaKucha();
});