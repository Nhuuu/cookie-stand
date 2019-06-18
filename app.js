'use strict';

var storeTable = document.getElementById('store-table');
var storeArr = [];
var totals = [];
var trEl = document.createElement('tr');
var tdEl = document.createElement('td');
var hours = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00pm',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
  '8:00pm'
];

// Constructor to create stores
var Store = function(location, minCustomer, maxCustomer, avgCookiesPerCustomer, cookiesPerHour = []){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = cookiesPerHour;
};

// Existing store objects
storeArr.push(new Store('1st and Pike', 23, 65, 6.3));
storeArr.push(new Store('SeaTac Airport', 3, 24, 1.2));
storeArr.push(new Store('Seattle Center', 11, 38, 3.7));
storeArr.push(new Store('Capitol Hill', 20, 38, 2.3));
storeArr.push(new Store('Alki', 2, 16, 4.6));

// Store object methods
Store.prototype.customersPerHour = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
};

Store.prototype.calculateCookiesPerHour = function(){
  var customers = this.customersPerHour();
  var cookies = this.avgCookiesPerCustomer * customers;
  return Math.ceil(cookies);
};

Store.prototype.calculateTotalPerHour = function(){
  var total = 0;
  for(var i = 0; i < hours.length; i++){
    var totalInHour = this.calculateCookiesPerHour();
    this.cookiesPerHour.push(totalInHour);
    total += totalInHour;
  }
  this.total = total;
};

// Make table header with hours
function makeHeader(){
  var theadEl = document.createElement('thead');
  var thEl = document.createElement('th');
  trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  theadEl.appendChild(trEl);
  trEl.appendChild(thEl);
  storeTable.appendChild(theadEl);
}

// Add each store's hourly sales to the table
Store.prototype.addRow = function(){
  if(this.cookiesPerHour.length === 0){
    this.calculateTotalPerHour();
  }

  trEl = document.createElement('tr');
  tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for(var j = 0; j < this.cookiesPerHour.length; j++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[j];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.total;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};


function sumOfDailyLocationTotals(){
  var allTotals = 0;
  for(var i = 0; i < storeArr.length; i++){
    allTotals += storeArr[i].total;
  }
  console.log(allTotals);
  return allTotals;
}

function clearTotals(){
  for(var i = 0; i < hours.length; i++){
    totals[i] = 0;
  }
}

function calculateTotals(){
  clearTotals();
  for(var i = 0; i < hours.length; i++){
    for(var j = 0; j < storeArr.length; j++){
      totals[i] += storeArr[j].cookiesPerHour[i];
    }
  }
}



// Add Totals row
function makeTotalsRow(){
  var tfootEl = document.createElement('tfoot');
  trEl = document.createElement('tr');
  trEl.id = 'footerRow';
  tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  calculateTotals();
  for(var i = 0; i < totals.length; i++){
    tdEl = document.createElement('td');
    console.log(totals[i]);
    tdEl.textContent = totals[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = sumOfDailyLocationTotals();
  trEl.appendChild(tdEl);

  tfootEl.appendChild(trEl);
  storeTable.appendChild(tfootEl);
}



// Populate the page!
function makePage(){
  makeHeader();
  for(var i = 0; i < storeArr.length; i++){
    storeArr[i].addRow();
  }
  makeTotalsRow();
}

makePage();


var form = document.getElementById('add-store-form');
var handleAddStoreForm = function(e){
  e.preventDefault();
  var formLocation = e.target.location.value;
  var formMinCustomer = e.target.minCustomer.value;
  var formMaxCustomer = e.target.maxCustomer.value;
  var formAvgCookiesPerCustomer = e.target.avgCookiesPerCustomer.value;
  var newStore = new Store(formLocation, formMinCustomer, formMaxCustomer, formAvgCookiesPerCustomer);
  storeArr.push(newStore);
  newStore.addRow();
  var footerRow = document.getElementById('footerRow');
  if(footerRow){
    footerRow.remove();
    makeTotalsRow();
  }
};


form.addEventListener('submit', handleAddStoreForm);
