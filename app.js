'use strict';

var storeUlEl = document.getElementById('store-container');

// Open store hours
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

// Each store object
var firstAndPike = {
  location: '1st and Pike',
  minHourCustomer: 23,
  maxHourCustomer: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesPerHour: []
};

firstAndPike.customersPerHour = function(){
  return Math.floor(Math.random() * (this.maxHourCustomer - this.minHourCustomer + 1) + this.minHourCustomer);
};

firstAndPike.calculateCookiesPerHour = function(){
  var customers = this.customersPerHour();
  var cookies = this.avgCookiesPerCustomer * customers;
  return Math.ceil(cookies);
}

firstAndPike.calculateTotalPerHour = function(){
  var total = 0;
  for(var i = 0; i < hours.length; i++){
    var totalInHour = this.calculateCookiesPerHour();
    this.cookiesPerHour.push(totalInHour);
    total += totalInHour;
  };
  this.total = total;
  console.log(this.total);
}


// Add info to the page!
firstAndPike.makeList = function(){
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


// Functions to start the page - 

// function to make page {
  // make list function for each store
  firstAndPike.makeList()
// }
