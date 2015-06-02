function startTimerCount(record_time_limit){
    var recTime = 0;
    var recInterval = setInterval(function() {
		recTime = recTime + 1;
		picAnimationDino1(recTime, "timer_pic");
		setTimerPosition("<h3>" + (record_time_limit - recTime) + " secs</h3>");

        if (recTime >= record_time_limit) {
                clearInterval(recInterval);
        }

    }, 1000);

}


function setTimerPosition(position) {
    document.getElementById('start_timer_word').innerHTML = position;
}

function onStopTimer(){
	timer_on = false;
	alert("Time's Up!");
	dispTimerDone("block");
}

/***** TIMER *****/

/* Modulo function to deal with negative numbers */
function mod(n, m) {
  return ((n % m) + m) % m;
}

/* Function to convert seconds to minutes */
function getMin(s) {
  return Math.floor(s / 60);
}

/* Function to convert time to string */
function timeToStr(n) {
  var t = n.toString();

  /* If string is only 1 digit, append a 0 to the beginning */
  if (t.length == 1) {
    t = "0" + t;
  }
  return t;
}

/* Function to get user input */
/*function getInput() {
	return document.getElementById('time-input').value;
}*/

/* Timer object */
var Timer = {
  sec: record_time_limit, // Number of seconds
  isOn: false, // Is the timer on?
  isDone: false, // Is the timer done?
  resetCount: 0, // Counts number of resets

  /* Starts the timer */
  start: function(func) {
    this.isOn = true;
    var self = this;

    this.interval = setInterval(function() {
      /* If the timer is not done, continue to decrease seconds */
      var time = timeToStr(getMin(self.sec - 1)) + ":" + timeToStr(mod(self.sec - 1, 60));
      if (getMin(self.sec - 1) >= 0) {
        changeTimeLimitHeader(time);
        self.sec--;
      } else {
        changeTimeLimitHeader(time);
      }

        /* If the number of seconds left is 0, then isDone is True */
        if (self.sec == 0 && !self.isDone) {
          self.isDone = true;
          clearInterval(this.interval);
          console.log("time's up!");
          func();
        }
        if (self.isDone) self.pause();
    }, 1000);
  },

  /* Pauses the timer */
  pause: function() {
    this.isOn = false;
    clearInterval(this.interval);
  },

  /* Plays the timer */
  play: function() {
    //console.log(this.isOn);
    if (!this.isOn) {
      this.start();
    }
  },

  reset: function() {
    this.isDone = false;
    this.pause();

    this.sec = record_time_limit;
    changeTimeLimitHeader(timeToStr(getMin(this.sec)) + ":" + timeToStr(mod(this.sec, 60)));
  }
};
