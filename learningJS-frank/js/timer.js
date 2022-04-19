

class Timer {
    //root refers to index.html's <div class="timer"> </div>
        constructor(root) {
            // root.innerHTML = Timer.getHTML();
          
            // querySelector returns first element that matches selector https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
            this.elements = {
                minutes: root.querySelector(".timer__part--minutes"),
                seconds: root.querySelector(".timer__part--seconds"),
                control: root.querySelector(".timer__btn--control"),
                reset: root.querySelector(".timer__btn--reset")
            };
          
        //interval = null makes timer not change. ie interval = 2 means timer decreases by 2
        this.interval = null;
        this.remainingSeconds = 0;

        this.updateInterfaceControls();

        //start and stop the timer
        this.elements.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });
       
        this.elements.reset.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes:");

            //if less than 1 hour
            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        });
    }

    //updates the timer display
    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
    
         // pad beginning of string to be 0 if no value for at least 2 characters
        this.elements.minutes.textContent = minutes.toString().padStart(2, "0");
        this.elements.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    //updates the display of start and stop buttons
    updateInterfaceControls() {
        //if not running then display start, else display stop
        if (this.interval === null) {
            this.elements.control.innerHTML = '<span class="material-icons">play_arrow</span>';
            this.elements.control.classList.add("timer__btn--start");
            this.elements.control.classList.remove("timer__btn--stop");
        } else {
            this.elements.control.innerHTML = '<span class="material-icons">pause</span>';
            this.elements.control.classList.add("timer__btn--stop");
            this.elements.control.classList.remove("timer__btn--start");
        }
    }

    start() {
        //check if there is time
        if (this.remainingSeconds === 0) return;

        //setInterval runs on a timer every 1000 milliseconds until there is 0 seconds
        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds <= 0) {
                this.stop();
            }
        }, 1000);

        //display pause button
        this.updateInterfaceControls();
    }

    stop() {
        //clears the this.interval = setInterval in start() method
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    // static getHTML() {
    //     // '' allows multiline javascript strings https://www.w3schools.com/js/js_string_templates.asp
    //     // sets the properties of the timer class
    //     return `
    //     <p class="text">Work Timer</p>
    //     <span class="timer__part timer__part--minutes">00</span>
    //     <span class="timer__part">:</span>
    //     <span class="timer__part timer__part--seconds">00</span>
    //     <button type="button" class="timer__btn timer__btn--control timer__btn--start">
    //         <span class="material-icons">
    //             play_arrow
    //         </span>
    //     </button>
    //     <button type="button" class="timer__btn timer__btn--reset">
    //         <span class="material-icons">
    //             timer
    //             </span>
    //     </button>
    //     `;
    // }
}

// class Timer2 {
//     //root refers to index.html's <div class="timer2"> </div>
//         constructor(root) {
//             root.innerHTML = Timer2.getHTML();
          
//             // querySelector returns first element that matches selector https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//             this.elements = {
//                 minutes: root.querySelector(".timer2__part--minutes"),
//                 seconds: root.querySelector(".timer2__part--seconds"),
//                 control: root.querySelector(".timer2__btn--control"),
//                 reset: root.querySelector(".timer2__btn--reset")
//             };
          
//         //interval = null makes timer2 not change. ie interval = 2 means timer2 decreases by 2
//         this.interval = null;
//         this.remainingSeconds = 0;

//         this.updateInterfaceControls();

//         //start and stop the timer2
//         this.elements.control.addEventListener("click", () => {
//             if (this.interval === null) {
//                 this.start();
//             } else {
//                 this.stop();
//             }
//         });
       
//         this.elements.reset.addEventListener("click", () => {
//             const inputMinutes = prompt("Enter number of minutes:");

//             //if less than 1 hour
//             if (inputMinutes < 60) {
//                 this.stop();
//                 this.remainingSeconds = inputMinutes * 60;
//                 this.updateInterfaceTime();
//             }
//         });
//     }

//     //updates the timer2 display
//     updateInterfaceTime() {
//         const minutes = Math.floor(this.remainingSeconds / 60);
//         const seconds = this.remainingSeconds % 60;
    
//          // pad beginning of string to be 0 if no value for at least 2 characters
//         this.elements.minutes.textContent = minutes.toString().padStart(2, "0");
//         this.elements.seconds.textContent = seconds.toString().padStart(2, "0");
//     }

//     //updates the display of start and stop buttons
//     updateInterfaceControls() {
//         //if not running then display start, else display stop
//         if (this.interval === null) {
//             this.elements.control.innerHTML = '<span class="material-icons">play_arrow</span>';
//             this.elements.control.classList.add("timer2__btn--start");
//             this.elements.control.classList.remove("timer2__btn--stop");
//         } else {
//             this.elements.control.innerHTML = '<span class="material-icons">pause</span>';
//             this.elements.control.classList.add("timer2__btn--stop");
//             this.elements.control.classList.remove("timer2__btn--start");
//         }
//     }

//     start() {
//         //check if there is time
//         if (this.remainingSeconds === 0) return;

//         //setInterval runs on a timer2 every 1000 milliseconds until there is 0 seconds
//         this.interval = setInterval(() => {
//             this.remainingSeconds--;
//             this.updateInterfaceTime();

//             if (this.remainingSeconds <= 0) {
//                 this.stop();
//             }
//         }, 1000);

//         //display pause button
//         this.updateInterfaceControls();
//     }

//     stop() {
//         //clears the this.interval = setInterval in start() method
//         clearInterval(this.interval);

//         this.interval = null;

//         this.updateInterfaceControls();
//     }

//     static getHTML() {
//         // '' allows multiline javascript strings https://www.w3schools.com/js/js_string_templates.asp
//         // sets the properties of the timer2 class
//         return `
//         <p class="text">Rest Timer</p>
//         <span class="timer2__part timer2__part--minutes">00</span>
//         <span class="timer2__part">:</span>
//         <span class="timer2__part timer2__part--seconds">00</span>
//         <button type="button" class="timer2__btn timer2__btn--control timer2__btn--start">
//             <span class="material-icons">
//                 play_arrow
//             </span>
//         </button>
//         <button type="button" class="timer2__btn timer2__btn--reset">
//             <span class="material-icons">
//                 timer2
//                 </span>
//         </button>
//         `;
//     }
// }

new Timer(document.querySelector(".timer"));
new Timer(document.querySelector(".timer2"));