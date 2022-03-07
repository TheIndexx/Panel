class Timer {
    //root refers to index.html's <div class="timer"> </div>
    constructor(root) {
        root.innerHTML = Timer.getHTML();
    }

    static getHTML() {
        // '' allows multiline javascript strings https://www.w3schools.com/js/js_string_templates.asp
        // sets the properties of the timer class
        return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00</span>
        <button type="button" class="timer__btn timer__btn--control timer__btn--start">
            <span class="material-icons">
                play_arrow
                </span>
        </button>
        <button type="button" class="timer__btn timer__btn--control timer__btn--reset">
            <span class="material-icons">
                timer
                </span>
        </button>
        `;
    }
}

new Timer(
    document.querySelector(".timer")
);