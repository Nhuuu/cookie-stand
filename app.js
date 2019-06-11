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

var pikeUl = document.getElementById('store-list');
var pikeLi = document.createElement('li');
pikeLi.textContent = firstAndPike.location;
pikeUl.appendChild(pikeLi);

for (var i = 0; i < firstAndPike.cookiesSoldHourly.length; i++){
  var pikeNestedUl = document.createElement('ul');
  pikeUl.appendChild(pikeNestedUl)
  var pikeNestedLi = document.createElement('li');
  pikeNestedLi.textContent = hours[i] + ': ' + firstAndPike.cookiesSoldHourly[i] + ' cookies';
  pikeNestedUl.appendChild(pikeNestedLi);
};

var pikeNestedLi = document.createElement('li');
pikeNestedLi.textContent = 'Total: ' + firstAndPike.totalCookies + ' cookies';
pikeNestedUl.appendChild(pikeNestedLi);


var seaTacUl = document.getElementById('store-list');
var seaTacLi = document.createElement('li');
seaTacLi.textContent = seaTacAirport.location;
seaTacUl.appendChild(seaTacLi);

for (var i = 0; i < seaTacAirport.cookiesSoldHourly.length; i++){
  var seaTacNestedUl = document.createElement('ul');
  seaTacUl.appendChild(seaTacNestedUl)
  var seaTacNestedLi = document.createElement('li');
  seaTacNestedLi.textContent = hours[i] + ': ' + seaTacAirport.cookiesSoldHourly[i] + ' cookies';
  seaTacNestedUl.appendChild(seaTacNestedLi);
};

var seaTacNestedLi = document.createElement('li');
seaTacNestedLi.textContent = 'Total: ' + seaTacAirport.totalCookies + ' cookies';
seaTacNestedUl.appendChild(seaTacNestedLi);


var seattleCenterUl = document.getElementById('store-list');
var seattleCenterLi = document.createElement('li');
seattleCenterLi.textContent = seattleCenter.location + ' cookies';
seattleCenterUl.appendChild(seattleCenterLi);

for (var i = 0; i < seattleCenter.cookiesSoldHourly.length; i++){
  var seattleCenterNestedUl = document.createElement('ul');
  seattleCenterUl.appendChild(seattleCenterNestedUl)
  var seattleCenterNestedLi = document.createElement('li');
  seattleCenterNestedLi.textContent = hours[i] + ': ' + seattleCenter.cookiesSoldHourly[i] + ' cookies';
  seattleCenterNestedUl.appendChild(seattleCenterNestedLi);
};

var seattleCenterNestedLi = document.createElement('li');
seattleCenterNestedLi.textContent = 'Total: ' + seattleCenter.totalCookies + ' cookies';
seattleCenterNestedUl.appendChild(seattleCenterNestedLi);



var capitolHillUl = document.getElementById('store-list');
var capitolHillLi = document.createElement('li');
capitolHillLi.textContent = capitolHill.location;
capitolHillUl.appendChild(capitolHillLi);

for (var i = 0; i < capitolHill.cookiesSoldHourly.length; i++){
  var capitolHillNestedUl = document.createElement('ul');
  capitolHillUl.appendChild(capitolHillNestedUl)
  var capitolHillNestedLi = document.createElement('li');
  capitolHillNestedLi.textContent = hours[i] + ': ' + capitolHill.cookiesSoldHourly[i] + ' cookies';
  capitolHillNestedUl.appendChild(capitolHillNestedLi);
};

var capitolHillNestedLi = document.createElement('li');
capitolHillNestedLi.textContent = 'Total: ' + capitolHill.totalCookies + ' cookies';
capitolHillNestedUl.appendChild(capitolHillNestedLi);


var alkiUl = document.getElementById('store-list');
var alkiLi = document.createElement('li');
alkiLi.textContent = alki.location;
alkiUl.appendChild(alkiLi);

for (var i = 0; i < alki.cookiesSoldHourly.length; i++){
  var alkiNestedUl = document.createElement('ul');
  alkiUl.appendChild(alkiNestedUl)
  var alkiNestedLi = document.createElement('li');
  alkiNestedLi.textContent = hours[i] + ': ' + alki.cookiesSoldHourly[i] + ' cookies';
  alkiNestedUl.appendChild(alkiNestedLi);
};

var alkiNestedLi = document.createElement('li');
alkiNestedLi.textContent = 'Total: ' + alki.totalCookies + ' cookies';
alkiNestedUl.appendChild(alkiNestedLi);


