class Timer {

    constructor({seconds, minutes, timerSeconds, timerMinutes, interval, counter}) {
       this.seconds = seconds;
       this.minutes = minutes;
       this.timerSeconds = timerSeconds;
       this.timerMinutes = timerMinutes;
       this.interval = interval;
       this.counter = counter;
    }
   
   
    runTimer() {
   
   
    this.seconds++; 
   
   //condition if seconds reach 60 - turn to 0 and add minutes by one
     if (this.seconds / 60 === 1) {
       this.seconds = 0;
       this.minutes++;
   
   
     }
   
     //add zero to the value for seconds
     if (this.seconds < 10) {
       this.timerSeconds = "0" + this.seconds.toString();
     } else {
       this.timerSeconds = this.seconds;
     }
   
     //add zero to the value for minutes
   
     if (this.minutes < 10) {
       this.timerMinutes = "0" + this.minutes.toString();
     } else {
       this.timerMinutes = this.minutes;
     }
   
   document.getElementById("timer").innerHTML = this.timerMinutes + ':' + this.timerSeconds;
   
   
   }
   
   
   startTimer() {
   
   
   
     if (this.counter === false) {
      this.interval = window.setInterval(() => this.runTimer(),1000);
       document.getElementById("startTimer").innerHTML = "Stop";
       this.counter = true; 
   
   
   
     } else {
       window.clearInterval(this.interval);
       document.getElementById("startTimer").innerHTML = "Start";
       this.counter = false; 
    }
    } 
   
    resetTime() {
     window.clearInterval(this.interval);
     this.seconds = 0;
     this.minutes = 0;
     document.getElementById("timer").innerHTML = "00:00";
     document.getElementById("startTimer").innerHTML = "Start"
    } 
}
   
   const timer = new Timer( {
   
       seconds: 0,
       minutes: 0,
       timerSeconds: 0,
       timerMinutes: 0,
       interval:null,
       counter: false,
});
   
let startTimer = new Timer();
