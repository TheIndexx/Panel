class Timer {
  constructor(seconds, minutes) {
    this.seconds = seconds;
    this.minutes = minutes;
  }

  timer(){
    var counter = 70;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        minutes = parseInt(counter/60);
        seconds = counter - (minutes*60)
        if (seconds < 10) {
          span.innerHTML = minutes + ":0" + seconds;
        }
        else {
          span.innerHTML = minutes + ":" + seconds;
        }
      }

      /*
      if (this.counter / 60 != 0) {
        this.minutes+= this.counter/60;
        document.body.appendChild(minutes);
      }
      */

      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
  
  startTimer() {
      document.getElementById("count").style="color:green;";
      timer();
  }
};

