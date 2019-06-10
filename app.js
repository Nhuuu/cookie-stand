'use strict';

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
  minHourCustomer: 23,
  maxHourCustomer: 65,
  avgCookieSold: 6.3,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * (this.maxHourCustomer - this.minHourCustomer + 1) + this.minHourCustomer);
  },
  cookiesSoldHourly: [],
  totalCookies: 0
}

var seaTacAirport = {
  minHourCustomer: 3,
  maxHourCustomer: 24,
  avgCookieSold: 1.2,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * (this.maxHourCustomer - this.minHourCustomer + 1) + this.minHourCustomer);
  },
  cookiesSoldHourly: [],
  totalCookies: 0
}

var seattleCenter = {
  minHourCustomer: 11,
  maxHourCustomer: 38,
  avgCookieSold: 3.7,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * (this.maxHourCustomer - this.minHourCustomer + 1) + this.minHourCustomer);
  },
  cookiesSoldHourly: [],
  totalCookies: 0
}

var capitolHill = {
  minHourCustomer: 20,
  maxHourCustomer: 38,
  avgCookieSold: 2.3,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * (this.maxHourCustomer - this.minHourCustomer + 1) + this.minHourCustomer);
  },
  cookiesSoldHourly: [],
  totalCookies: 0
}

var alki = {
  minHourCustomer: 2,
  maxHourCustomer: 16,
  avgCookieSold: 4.6,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * (this.maxHourCustomer - this.minHourCustomer + 1) + this.minHourCustomer);
  },
  cookiesSoldHourly: [],
  totalCookies: 0
}


// For each store, for each hour calculate avg cookies sold and total cookies needed to be baked daily.

var salesFirstAndPike = function(){
  for(var i = 0; i < hours.length; i++){
    var hourlySales = Math.round(firstAndPike.avgCookieSold * firstAndPike.randHourlyCustomer());
    firstAndPike.cookiesSoldHourly.push(hourlySales)
    firstAndPike.totalCookies = firstAndPike.totalCookies + hourlySales;
  }
}

salesFirstAndPike();


var salesSeaTacAirport = function(){
  for(var i = 0; i < hours.length; i++){
    var hourlySales = Math.round(firstAndPike.avgCookieSold * firstAndPike.randHourlyCustomer());
    firstAndPike.cookiesSoldHourly.push(hourlySales)
    firstAndPike.totalCookies = firstAndPike.totalCookies + hourlySales;
  }
}

salesSeaTacAirport();


var salesSeattleCenter = function(){
  for(var i = 0; i < hours.length; i++){
    var hourlySales = Math.round(firstAndPike.avgCookieSold * firstAndPike.randHourlyCustomer());
    firstAndPike.cookiesSoldHourly.push(hourlySales)
    firstAndPike.totalCookies = firstAndPike.totalCookies + hourlySales;
  }
}

salesSeattleCenter();


var salesCapitolHill = function(){
  for(var i = 0; i < hours.length; i++){
    var hourlySales = Math.round(firstAndPike.avgCookieSold * firstAndPike.randHourlyCustomer());
    firstAndPike.cookiesSoldHourly.push(hourlySales)
    firstAndPike.totalCookies = firstAndPike.totalCookies + hourlySales;
  }
}

salesCapitolHill();


var salesAlki = function(){
  for(var i = 0; i < hours.length; i++){
    var hourlySales = Math.round(firstAndPike.avgCookieSold * firstAndPike.randHourlyCustomer());
    firstAndPike.cookiesSoldHourly.push(hourlySales)
    firstAndPike.totalCookies = firstAndPike.totalCookies + hourlySales;
  }
}

salesAlki();


// Add info to the page!

