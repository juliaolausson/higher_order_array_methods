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

 /*
const points = [42, 3, 16, 8, 84];
const cats = [
    'Miao',
    'Megabite',
    'C.A.T',
    'William',
    'Picatso'
];

const cats = [
    {name: 'Picatso', age: 8},
    {name: 'Miao', age: 42},
    {name: 'C.A.T', age: 3},
    {name: 'William', age: 16},
    {name: 'Megabite', age: 84},
];

const logCatName = catname => {
    console.log(`Cat is called ${catname}`);
}

const ourOwnForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
};

ourOwnForEach();

//catnames.forEach(function(catname, i) {
//    console.log(`Cat at index ${i} is ${catname}`);
//});

//catnames.forEach(logCatName);
*/

// FILTER

/*
const points = [42, 3, 16, 8, 84];

//const filteredPoints = [];

const filteredPoints = points.filter(function(point){
    if (points > 20){
        return true;
    } else {
        return false;
    }
});
*/

// filtrera alla katter som är äldre än 7 år. 

const cats = [
    {name: 'Picatso', age: 8},
    {name: 'Miao', age: 42},
    {name: 'C.A.T', age: 3},
    {name: 'William', age: 4},
    {name: 'Megabite', age: 84},
];

const seniorCats = cats.filter(cat => cat.age >= 7); // Nedkortad arrow function. Behöver inte skriva return.
    //return cat.age >= 7; 














