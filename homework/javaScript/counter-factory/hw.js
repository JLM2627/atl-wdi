// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);// code given 
    let newCounter = document.createElement('div')// establishing var "newCounter" and creating div element of HTML in Javascript
    newCounter.innerHTML =<div class='counter' data-index='2'><h3>Count: <span>0</span></h3><button class='increment'> + 1 </button></div>// HTML code inserted
  // newCounterComponent.class = 'counter'// pulled from the class component. As the button is clickes, a new counter component will be created
  newCounterComponent.dataSet.counterId += // I have to reference the data index using dataSet and counterId. README stated that += adds an incrememt
  // listed below are more attempts to call and reference the button. Two hours spent, I have to put my computer away
  
  // var button = document.createElement("button");
  // button. innerHTML = "Do Something";
  //counter +=<button onclick="counter++">Increment</button>
  },
  //// 1. Create the button.
//var button = document. createElement("button");
////button. innerHTML = "Do Something";
// 2. Append somewhere.
//var body = document. getElementsByTagName("body")[0];
//body. appendChild(button);
// 3. Add event handler.


  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    // Your Code Here
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Co
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    // Your Code Here
  },
  onClickIncrement: function(event){
    // Your Code Here
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
