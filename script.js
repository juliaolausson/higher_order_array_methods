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

 // sort ()

 const catnames = [
     'Picatso',
     'William',
     'Mega-Bite',
     'Chairwoman',
     'C.A.T',
 ];

 catnames.sort();

 const points = [42, 3, 16, 8, 84];
 points.sort(function(a, b){
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }

    // a är större än b, returnera -1 för att flytta a till ett tidigare index.
    // a är lika med b, returnera 0 för att säga de är lika, dvs flytta inte a. 
    // a är mindre än b, returnera 1 // dvs flytta a till ett senare index. 
    // går att ändra ordningen genom att ta 1 där -1 står, då faller de olika i sifferordningen. 
 });
 
