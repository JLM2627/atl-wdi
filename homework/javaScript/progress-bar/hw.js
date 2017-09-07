// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = { // global variable for all all four functions listed below
  drawNumericDisplay: function(timerValue){ // : signifies name of function with argument. timer value is being run throughout all four functions as argument
    document.getElementById('numeric-display').textContent = timerValue; // timerValue to be assigned to 'numeric-display' referenced in HTML 

   var numericDisplay = document.getElementById('numeric-display'); // creating the variable for the numbers to display in JS
     numericDisplay.textContent = timerValue;// display timer value
   if (timerValue <= 10) { // when and if this situation  occurs... the timeValue at 10 seconds or less, execute code below
       numericDisplay.style.color = 'red'; // red will be displayed in user interface 
       var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2); // as the code runs, the "newSize" is increased in size using the formula provided. rounds to the second decimal
       numericDisplay.style.fontSize = newSize + 'em';// font size is increased to represent the math performed above and also make bold
    }
  },
  
  },
  drawProgressBars: function(timerValue){  // signifies name of function with argument. timer value is being run throughout all four functions as argument,  this time pertaining to progressbar
    var timeElapsed = 100 - timerValue;//  // states we are starting at 100 and decresing by function, timeValue
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%'; // states that we are referencing the class 'progress-bar' and that the width is changed as timeElapsed + '%' is executed.
    
    var progress = 100 - timerValue;// shows us the change or progress as the timerValue is decreased
    var bars = document.getElementsByClassName('progress-bar');// states that we are writing code for the progress bar class
     for (var i = 0; i < bars.length; i++) {
       // for loop representing a decresing increment from bars variable, 'progress-bar'
       bars[i].style.width = progress + '%';
       // for loop representing a decresing increment from bars variable, 'progress-bar
     }
  },
  },
  drawLitFuses: function(timerValue){// this declares that the following code is referencing the drawLitFuses section of our UI
    
    var percentUnburnt = timerValue/100;// function timerValue / 100 illustrates how much flame is left to burn as it crosses the screen
    document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt*98 + '%';// the following to lines of code display how much of the screen has not been "burned" and how much has been "burned"
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%';
   
     var percentUnburnt = timerValue/100; //  function timerValue / 100 illustrates how much flame is left to burn or has burned(?) as it crosses the screen
     
     var numFuses = document.getElementsByClassName('fuse').length;
     for (var i = 0; i < numFuses; i++){
       document.getElementsByClassName('unburnt')[i].style.width = percentUnburnt*98 + '%';
       document.getElementsByClassName('burnt')[i].style.width = (1 - percentUnburnt)*98 + '%';
     }
  },
  drawCrawlers: function(timerValue){ 
    var timeElapsed = 100 - timerValue;
    if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + 'px';
    
     var timeElapsed = 100 - timerValue;
     var crawlers = document.getElementsByClassName('crawler');
     for (var i = 0; i < crawlers.length; i++) {
       if (timerValue%2 === 0) {
         crawlers[i].style.marginTop = '0px';
       }
       else {
         crawlers[i].style.marginTop = '10px';
       }
       crawlers[i].style.marginLeft = (timeElapsed*10) + 'px';
     }
  }
};

// I worked with Grant from my cohort to complete this assignment. It was an extremely difficult assignment and were ultimately forced to refernce the homework solutions and "work backwards." included is the complete homework solution code. All code sans commented out code is property of GA
