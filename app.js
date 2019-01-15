'use strict';

var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function randomInc(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var ran = (Math.floor(Math.random() * (max - min + 1)) + min);
  console.log(ran);
  return(ran);
};

var pikeCustomers = [];

var pikeUl = document.getElementById('pike');

var pike = {
  custHrMin:23,
  custHrMax:65,
  avgCook:6.3,
  cookHr:[],
  cookHrF: function(){
    for(var i = 0; i < pikeCustomers.length; i++) {
      this.cookHr.push(Math.floor(this.avgCook * pikeCustomers[i]));};
  },
  ranLoop: function(){
    for (var i = 0; i < hrs.length; i++){
      var b = randomInc(pike.custHrMin, pike.custHrMax);
      pikeCustomers.push(b);
    };
  },
  render: function() {
    for (var i = 0; i < hrs.length; i++){
      var liEl = document.createElement('li');
      console.log('liEl', liEl);
      liEl.textContent = `${hrs[i]}: ${this.cookHr[i]}`;
      console.log('just assigned a  value liEl', liEl);
      pikeUl.appendChild(liEl);
    }
  },
};

pike.ranLoop();
console.log(pike.ranLoop());
pike.cookHrF();
console.log(pike.cookHrF());
pike.render();
console.log(pike.render());


///seaTac

var seaTacCustomers = [];

var seaTacUl = document.getElementById('seaTac');

var seaTac = {
  custHrMin:3,
  custHrMax:24,
  avgCook:1.2,
  cookHr:[],
  cookHrF: function(){
    for(var i = 0; i < seaTacCustomers.length; i++) {
      this.cookHr.push(Math.floor(this.avgCook * seaTacCustomers[i]));};
  },
  ranLoop: function(){
    for (var i = 0; i < hrs.length; i++){
      var b = randomInc(seaTac.custHrMin, seaTac.custHrMax);
      seaTacCustomers.push(b);
    };
  },
  render: function() {
    for (var i = 0; i < hrs.length; i++){
      var liEl = document.createElement('li');
      console.log('liEl', liEl);
      liEl.textContent = `${hrs[i]}: ${this.cookHr[i]}`;
      console.log('just assigned a  value liEl', liEl);
      seaTacUl.appendChild(liEl);
    }
  },
};



seaTac.ranLoop();
console.log(seaTac.ranLoop());
seaTac.cookHrF();
console.log(seaTac.cookHrF());
seaTac.render();
console.log(seaTac.render());



///center

var centerCustomers = [];

var centerUl = document.getElementById('center');

var center = {
  custHrMin:11,
  custHrMax:38,
  avgCook:3.7,
  cookHr:[],
  cookHrF: function(){
    for(var i = 0; i < centerCustomers.length; i++) {
      this.cookHr.push(Math.floor(this.avgCook * centerCustomers[i]));};
  },
  ranLoop: function(){
    for (var i = 0; i < hrs.length; i++){
      var b = randomInc(center.custHrMin, center.custHrMax);
      centerCustomers.push(b);
    };
  },
  render: function() {
    for (var i = 0; i < hrs.length; i++){
      var liEl = document.createElement('li');
      console.log('liEl', liEl);
      liEl.textContent = `${hrs[i]}: ${this.cookHr[i]}`;
      console.log('just assigned a  value liEl', liEl);
      centerUl.appendChild(liEl);
    }
  },
};



center.ranLoop();
console.log(center.ranLoop());
center.cookHrF();
console.log(center.cookHrF());
center.render();
console.log(center.render());


///capHill

var capHillCustomers = [];

var capHillUl = document.getElementById('capHill');

var capHill = {
  custHrMin:20,
  custHrMax:38,
  avgCook:2.3,
  cookHr:[],
  cookHrF: function(){
    for(var i = 0; i < capHillCustomers.length; i++) {
      this.cookHr.push(Math.floor(this.avgCook * capHillCustomers[i]));};
  },
  ranLoop: function(){
    for (var i = 0; i < hrs.length; i++){
      var b = randomInc(capHill.custHrMin, capHill.custHrMax);
      capHillCustomers.push(b);
    };
  },
  render: function() {
    for (var i = 0; i < hrs.length; i++){
      var liEl = document.createElement('li');
      console.log('liEl', liEl);
      liEl.textContent = `${hrs[i]}: ${this.cookHr[i]}`;
      console.log('just assigned a  value liEl', liEl);
      capHillUl.appendChild(liEl);
    }
  },
};



capHill.ranLoop();
console.log(capHill.ranLoop());
capHill.cookHrF();
console.log(capHill.cookHrF());
capHill.render();
console.log(capHill.render());


///alki

var alkiCustomers = [];

var alkiUl = document.getElementById('alki');

var alki = {
  custHrMin:2,
  custHrMax:16,
  avgCook:4.6,
  cookHr:[],
  cookHrF: function(){
    for(var i = 0; i < alkiCustomers.length; i++) {
      this.cookHr.push(Math.floor(this.avgCook * alkiCustomers[i]));};
  },
  ranLoop: function(){
    for (var i = 0; i < hrs.length; i++){
      var b = randomInc(alki.custHrMin, alki.custHrMax);
      alkiCustomers.push(b);
    };
  },
  render: function() {
    for (var i = 0; i < hrs.length; i++){
      var liEl = document.createElement('li');
      console.log('liEl', liEl);
      liEl.textContent = `${hrs[i]}: ${this.cookHr[i]}`;
      console.log('just assigned a  value liEl', liEl);
      alkiUl.appendChild(liEl);
    }
  },
};



alki.ranLoop();
console.log(alki.ranLoop());
alki.cookHrF();
console.log(alki.cookHrF());
alki.render();
console.log(alki.render());

// var alki = {
//   custHrMin:2,
//   custHrMax:16,
//   avgCook:4.6,
// };