'use strict';

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

var stores = ['firstAndPike', 'seaTacAirport', 'seattleCenter', 'capitolHill', 'alki'];

var firstAndPike = {
  minHourCustomer: 23,
  maxHourCustomer: 65,
  avgCookieSold: 6.3,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * this.maxHourCustomer);
  },
  projectedCookiesSoldHourly: []
}

var seaTacAirport = {
  minHourCustomer: 3,
  maxHourCustomer: 24,
  avgCookieSold: 1.2,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * this.maxHourCustomer);
  },
  projectedCookiesSoldHourly: []
}

var seattleCenter = {
  minHourCustomer: 11,
  maxHourCustomer: 38,
  avgCookieSold: 3.7,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * this.maxHourCustomer);
  },
  projectedCookiesSoldHourly: []
}

var capitolHill = {
  minHourCustomer: 20,
  maxHourCustomer: 38,
  avgCookieSold: 2.3,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * this.maxHourCustomer);
  },
  projectedCookiesSoldHourly: []
}

var alki = {
  location: '1st and Pike',
  minHourCustomer: 2,
  maxHourCustomer: 16,
  avgCookieSold: 4.6,
  randHourlyCustomer: function(){
    return Math.floor(Math.random() * this.maxHourCustomer);
  },
  cookiesSoldHourly: []
}

var projectedSales = function(){
  // for each on storeArr push 
  return avgCookieSold * randHourlyCustomer();
}
// for each store, create a list element and display on sales.html

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

// for each hour, random generate projectedSales


// total function to add all in the array for each location

// Calculating the sum of these hourly totals; your output for each location...
