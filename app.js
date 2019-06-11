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
  location: '1st and Pike',
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
  location: 'SeaTac Airport',
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
  location: 'Seattle Center',
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
  location: 'Capitol Hill',
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
  location: 'Alki',
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
    var hourlySales = Math.round(seaTacAirport.avgCookieSold * seaTacAirport.randHourlyCustomer());
    seaTacAirport.cookiesSoldHourly.push(hourlySales)
    seaTacAirport.totalCookies = seaTacAirport.totalCookies + hourlySales;
  }
}

salesSeaTacAirport();


var salesSeattleCenter = function(){
  for(var i = 0; i < hours.length; i++){
    var hourlySales = Math.round(seattleCenter.avgCookieSold * seattleCenter.randHourlyCustomer());
    seattleCenter.cookiesSoldHourly.push(hourlySales)
    seattleCenter.totalCookies = seattleCenter.totalCookies + hourlySales;
  }
}

salesSeattleCenter();


var salesCapitolHill = function(){
  for(var i = 0; i < hours.length; i++){
    var hourlySales = Math.round(firstAndPike.avgCookieSold * capitolHill.randHourlyCustomer());
    capitolHill.cookiesSoldHourly.push(hourlySales)
    capitolHill.totalCookies = capitolHill.totalCookies + hourlySales;
  }
}

salesCapitolHill();


var salesAlki = function(){
  for(var i = 0; i < hours.length; i++){
    var hourlySales = Math.round(alki.avgCookieSold * alki.randHourlyCustomer());
    alki.cookiesSoldHourly.push(hourlySales)
    alki.totalCookies = alki.totalCookies + hourlySales;
  }
}

salesAlki();


// Add info to the page!
// 4 Step process: 1. Find a parent element: <ul> 2. Create a new element: <li> 3. Give the element content. 4. Append the new element to the parent element.

var pikeStoreUlEl = document.getElementById('store-list');
var pikeStoreLiEl = document.createElement('li');
pikeStoreLiEl.textContent = firstAndPike.location;
pikeStoreUlEl.appendChild(pikeStoreLiEl);


for (var i = 0; i < firstAndPike.cookiesSoldHourly.length; i++){
  // var pikeStoreNestedUl = document.createElement('ul');
  // document.setAttribute()
  // var getNestedUl = document.getElementById('nested');
  // var pikeStoreNestedLi = document.createElement('li');
  // pikeStoreNestedLi.textContent = hours[i] + ': ' + firstAndPike.cookiesSoldHourly[i];
  // pikeStoreNestedUl.appendChild(pikeStoreNestedLi);
  console.log(firstAndPike.cookiesSoldHourly[i]);
};




