'use strict';

var storeUlEl = document.getElementById('store-container');

var storeArr = [];

// Array of open store hours
var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
]

// Constructor to create stores
var Store = function(location, minCustomer, maxCustomer, avgCookiesPerCustomer, cookiesPerHour = []){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = cookiesPerHour;
};

// New store objects
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
  };
  this.total = total;
};

Store.prototype.makeList = function(){
  if(this.cookiesPerHour.length === 0){
    this.calculateTotalPerHour();
  }
  
  var locationLiEl = document.createElement('li');
  var h2El = document.createElement('h2');
  h2El.textContent = this.location;
  locationLiEl.appendChild(h2El);

  var ulEl = document.createElement('ul');
  for (var j = 0; j < this.cookiesPerHour.length; j++){
    var hourLiEl = document.createElement('li');
    hourLiEl.textContent = hours[j] + ': ' + this.cookiesPerHour[j] + ' cookies';
    ulEl.appendChild(hourLiEl);
  }
  
  var totalLiEl = document.createElement('li');
  totalLiEl.textContent = 'Total: ' + this.total + ' cookies';
  ulEl.appendChild(totalLiEl);

  locationLiEl.appendChild(ulEl);
  storeUlEl.appendChild(locationLiEl);
}

// Populate the page!
function makePage() {
  for(var i = 0; i < storeArr.length; i++){
    storeArr[i].makeList();
  }
}

makePage();