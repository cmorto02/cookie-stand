'use strict';

var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allShops = [];

var hourTotals = [];

var allTotal = 0;

function Shop( name, min, max, averageCookies) {
  this.name = name;
  this.custHrMin = min;
  this.custHrMax = max;
  this.avgCook = averageCookies;
  this.customers = [];
  this.cookHr = [];
  this.total = 0;
  allShops.push(this);
}

Shop.prototype.cookHrF = function() {
  for(var i = 0; i < this.customers.length; i++) {
    this.cookHr.push(Math.floor(this.avgCook * this.customers[i]));
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

new Shop('1st and Pike', 23, 65, 6.3);
new Shop('SeaTac Airport', 3, 24,1.2);
new Shop('Seattle Center', 11, 38, 3.7);
new Shop('Capitol Hill', 20, 38, 3.7);
new Shop('Alki', 2, 16, 4.6);


for (var i = 0; i < allShops.length; i++){
  allShops[i].randomCustomersPerHr();
};


for (var j = 0; j < allShops.length; j++){
  allShops[j].cookHrF();
};

for (var k = 0; k < hrs.length; k++){
  var perHrCookTotal = 0;
  for (var l = 0; l < allShops.length; l++){
    perHrCookTotal += allShops[l].cookHr[k];
  };
  hourTotals.push(perHrCookTotal);
};

for (var q = 0; q < hourTotals.length; q++){
  allTotal += hourTotals[q];
};

////tables in js

var cookieTable = document.getElementById('cookieTable');

function renderHeader(){
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
  console.log(hrs[p]);
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

renderHeader();
renderShops();
renderTotals();

