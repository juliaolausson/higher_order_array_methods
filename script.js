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

 // reduce ()

const prices = [20, 10, 15, 25, 30, 40, 80, 5];

const totalValue = prices.reduce(function(sum, price){
    return sum + price;
}, 0); //startvärdet. Denna ändras varje gång vi itererat. 
