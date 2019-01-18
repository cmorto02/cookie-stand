'use strict';

var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allShops = [];
var hourTotals = [];
var allTotal = 0;

var newLocation = document.getElementById('newLocation');

function Shop( name, min, max, averageCookies) {
  this.name = name;
  this.custHrMin = min;
  this.custHrMax = max;
  this.avgCook = averageCookies;
  this.customers = [];
  this.cookHr = [];
  this.total = 0;
  allShops.unshift(this);
}

Shop.prototype.cookHrF = function() {
  for(var i = 0; i < this.customers.length; i++) {
    this.cookHr.push(Math.round(this.avgCook * this.customers[i]));
    this.total = this.total + this.cookHr[i];
  };
};



Shop.prototype.randomCustomersPerHr = function() {
  for (var i = 0; i < hrs.length; i++){
    var b = randomInc(this.custHrMin, this.custHrMax);
    this.customers.push(b);
  };
};

function randomInc(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return(Math.floor(Math.random() * (max - min + 1)) + min);
};

function handleNewLocation(event){
  event.preventDefault();
  if(!event.target.location.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value){
    return alert('Fields cannot be empty.');
  }
  if(min > max){
    return alert('Min must be lower than max.');
  }
  var name = event.target.location.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var averageCookies = event.target.avg.value;

  var newlocation = new Shop(name, min, max, averageCookies);

  for (var s = 0; s < allShops.length; s++){
    allShops[s].total = 0;
    allShops[s].cookHr = [];
    allTotal = 0;
    hourTotals = [];
  }
  allShops[0].randomCustomersPerHr();
  pageLoad();
};

newLocation.addEventListener('submit', handleNewLocation);

new Shop('1st and Pike', 1, 1, 1);
new Shop('SeaTac Airport', 1, 1, 1);
new Shop('Seattle Center', 1, 1, 1);
new Shop('Capitol Hill', 1, 1, 1);
new Shop('Alki', 2, 10, 2);

function runRandomCustomers(){
  for (var i = 0; i < allShops.length; i++){
    allShops[i].randomCustomersPerHr();
  };
};

function runCookHrF(){
  for (var j = 0; j < allShops.length; j++){
    allShops[j].cookHrF();
  };
};

function fillTots(){
  for (var k = 0; k < hrs.length; k++){
    var perHrCookTotal = 0;
    for (var l = 0; l < allShops.length; l++){
      perHrCookTotal += allShops[l].cookHr[k];
    };
    hourTotals.push(perHrCookTotal);
  };
};

function lastTotal(){
  for (var q = 0; q < hourTotals.length; q++){
    allTotal += hourTotals[q];
  };
}

////tables in js

var cookieTable = document.getElementById('cookieTable');

function renderHeader(){
  cookieTable.textContent = '';
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for (var p = 0; p < hrs.length; p++){
    tdEl = document.createElement('td');
    tdEl.textContent = hrs[p];
    trEl.appendChild(tdEl);
  }
  var totalEl = document.createElement('td');
  totalEl.textContent = 'totals';
  trEl.appendChild(totalEl);
  cookieTable.appendChild(trEl);
}

Shop.prototype.renderBody = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var m = 0; m < hrs.length; m++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookHr[m];
    trEl.appendChild(tdEl);
  }
  var totalEl = document.createElement('td');
  totalEl.textContent = this.total;
  trEl.appendChild(totalEl);
  cookieTable.appendChild(trEl);
};

function renderTotals(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (var o = 0; o < hrs.length; o++){
    tdEl = document.createElement('td');
    tdEl.textContent = hourTotals[o];
    trEl.appendChild(tdEl);
  }
  var allTotalEl = document.createElement('td');
  allTotalEl.textContent = allTotal;
  trEl.appendChild(allTotalEl);
  cookieTable.appendChild(trEl);
}

function renderShops(){
  for (var n = 0; n < allShops.length; n++){
    allShops[n].renderBody();
  }
}

runRandomCustomers();

function pageLoad(){
  renderHeader();
  runCookHrF();
  renderShops();
  fillTots();
  lastTotal();
  renderTotals();
}

pageLoad();
