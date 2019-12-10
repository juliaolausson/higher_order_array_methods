/**
 * Higher order array methods
 * 
 * .forEach()
 * .filter()
 * .map ()
 * .reduce()
 * .sort()
 * 
 * Method Chaining
 */

 // map ()

 const prices = [20, 10, 30, 25, 15, 40, 80, 5];

 const blackFridayPrices = prices.map(price => price / 2); // förkortad funktion när det endast är en parementer. 
    //let newPrice = price / 2; 
    //return newPrice;

 console.log('Black friday prices is', blackFridayPrices);





