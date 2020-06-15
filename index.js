'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: take a value and return the input value unchanged.
 * 
 * @param {*} value: single value that can be any type og data
 * 
 * @return {*}: an unchanged value.
 * 
 */ 

function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Take in a value and return a string.
 * 
 * @param {*} value: Single value
 * 
 * @return {string}: a string of the value's type of data
 * 
 */
 
 function typeOf(value) {
       if (value === null) {
        return "null";
    }
    else if (value === undefined){
        return "undefined";
    }
    else if (Array.isArray(value)){
        return "array";
    }
    else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: Returns either a string or an array of the elements 
 * in the array. It starts at the beginning of the array
 * 
 * @param {Array}  array: that will return the elements depending on the number
 * @param {number}  number: that determines the length of the array to return 
 * 
 * edge cases - if passed in a value that is not an array, will return empty array.
 * if value with data type other than number passed in to number parameter, will return last element of array
 * 
 * @return {string or array}: the elements from the start of the array amount depends on the number
 */

function first(array, number) {
    if (!Array.isArray(array)) {
        return [];
    }
    if (typeof number !== "number") {
        return array[0];
    }
    var newArr = [];
    if (number > array.length){
        number = array.length;
    }
    for (var i = 0; i < number; i++){
        newArr.push(array[i]);
    }
    return newArr;
}

module.exports.first = first;

/**
 * last: takes an array and number and returns the last element of the array
 * 
 * @param {array} array: the array to collect elements from to return
 * @param {number} number: the number of elements to return from the end of the array passed in
 * 
 * edge cases - if passed in a value that is not an array, will return empty array.
 * if value with data type other than number passed in to number parameter, will return last element of array
 * 
 * @return {Array}: Returns an array of elements from the end of the array passed in. Some edge cases will cause a single element to be returned
 *
 */
 
function last(array, number) {
    if (!Array.isArray(array)) {
        return [];
    }
    if (typeof number !== "number") {
        return array[array.length-1];
    }
    var newArr = [];
    if (number > array.length){
        number = array.length;
    }
    for (var i = array.length-number; i < array.length; i++){
        newArr.push(array[i]);
    }
    return newArr;
}

module.exports.last = last;

/**
 * indexOf: searches through an array and looks for a specific value; returns the first index of that value if found
 * 
 * @param {Array} array: an array to search through
 * 
 * @param {*} value: a value to look for in the array
 * 
 * @return {Number}: the index of the first instance of value; if not found will return -1
 * 
 */
 
function indexOf(array, value) {
    if (!Array.isArray(array)){
        return -1;
    }
    for (var i = 0; i < array.length; i++){
        if (value === array[i]){
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to return a boolean value if a value is in an array.
 * 
 * @param {Array} array: To loop through.
 * @param {*} val: compares to the array element
 * 
 * @return {boolean} boolean: true if value is equal to an element in the array.
 * false if value is not equal to the array.
 */
 
function contains(arr, val) {
    if (!Array.isArray(arr)){
        return false;
    }
    for (var i = 0; i < arr.length; i++){
        if (val === arr[i]){
            return true;
        }
    }
    return false;
}

module.exports.contains = contains;


/**
 * unique: Returns a new array w/o duplicates from a given array
 * 
 * @param {Array} arr: Array to remove duplicates
 * 
 * @return {Array}: Returns a new array w/o the duplicates from the 
 *  original array
 */

 function unique(array){
    const arrNonDup = [];
    
    for (let i = 0; i < array.length; i++){
        if (!arrNonDup.includes(array[i])){
            arrNonDup.push(array[i]);
        }
    } 
    return arrNonDup;
}

module.exports.unique = unique;

 /**
 * filter: iterates over an array and returns an array of all elements that passed the input function
 * 
 * @param {Array} arr: the array to be iterated over and whose elements will undergo the test func
 * 
 * @param {Function} func: the test function that will be executed on each element of the passed in array
 * 
 * @return {Array}: an array of all elements that passed the test function
 * 
 */
 
 function filter(arr, func) {
    let newArr = [];                                   
    for (let i = 0; i < arr.length; i++) {             
        if (func(arr[i], i, arr)) {                     
            newArr.push(arr[i]);                           
        }
    }
    return newArr;                                     
}

module.exports.filter = filter;

/**
 * reject: Return a new array of False values based on the results of a Function using each given
 *  array value as the argument.
 * 
 * @param {Array} arr: Given array to test each value with the given function
 * @param {Function} f: This function will test each value of the array and return a Boolean value
 * 
 * @return {Array}: If the return from the Function is False it will add the array value to a new array
 */
 
 function reject(arr, func) {
    let newArr = [];                                
    for (let i = 0; i < arr.length; i++) {          
        if (!func(arr[i], i, arr)) {                
            newArr.push(arr[i]);                        
        }
    }
    return newArr;                                
}

module.exports.reject = reject;

 /**
 * partition: takes in an array and returns an array of two arrays - the first of the elements of arr that passed func, and the second of the elements of arr that failed func
 * 
 * @param {Array} arr: the array to be iterated over and whose elements will undergo the test func
 * 
 * @param {Function} func: the test function that will be executed on each element of the passed in array
 * 
 * @return {Array}: an array of two subarrays, the first of which contains all passed elements from arr, and the second which contains all failed elements from arr
 * 
 */
 
  function partition(arr, func) {
    return [filter(arr, func), reject(arr, func)];
}

module.exports.partition = partition;

/**
 * map: Return an array with updated values from an Array/Object based on a given function
 * 
 * @param {Array/Object} collection: Array/Object to iterate and use as arguements for a given function
 * 
 * @param {Function} f: The function will return a value to be stored in a new array using the
 *  provided Array/Object
 * 
 * @return {Array}: This array will contain all of the values returned from the Function using 
 *  the Array/Object values
 */
 
 function map(collection, func) {
    let newArr = [];                                                  
    if (Array.isArray(collection)) {                                    
        for (let i = 0; i < collection.length; i++) {                   
            newArr.push(func(collection[i], i, collection));                
        }
    } else {                                                          
        for (let keys in collection) {                                  
            newArr.push(func(collection[keys], keys, collection));          
        }
    }
    return newArr;                                                      
}

module.exports.map = map;

/** pluck: designed to take in an array of objects and a key name and will return an array of all values 
 *  assigned to those key names for each object.
 * 
 * @param {Array} array: The array of object of which to look for the values at each key
 * 
 * @param {String} key: The string name of the key property where to grab the values from 
 * 
 * @return {Array} array: Returns an array of all the values associated with the given key property from each object in the array.
 */
 
 function pluck(arr, property) {
    let newArr = [];                               
    for (let i = 0; i < arr.length; i++) {          
        newArr.push(arr[i][property]);              
    }
    return newArr;                                  
}

module.exports.pluck = pluck;


 /**
 * every: takes in a collection and returns true if each element of <collection> passes a test function
 * 
 * @param {Array or Object} collection: the collection to be iterated over; each element will have the test function executed on it
 * 
 * @param {Function} func: the function to be invoked on all elements from passed in <collection>
 * 
 * @return {Boolean}: returns true if every element passes test, and returns false otherwise
 * 
 */
 
 function every(collection, func) {
    if (Array.isArray(collection)) {                                    
        if (func === undefined) {                                           
            for (let i = 0; i < collection.length; i++) {                       
                if (collection[i] === false) {                                 
                    return false;                                                   
                }
            }
            return true;                                                        
        } else {                                                            
            for (let i = 0; i < collection.length; i++) {                       
                if (func(collection[i], i, collection) === false) {            
                    return false;                                               
                }
            }
        }
    } else {                                                            
        if (func === undefined) {                                           
            for (let keys in collection) {                                      
                if (collection[keys] === false) {                              
                    return false;                                                  
                }
            }
            return true;                                                        
        }                                                                   
        for (let keys in collection) {                                         
            if (func(collection[keys], keys, collection) === false) {           
                return false;                                                   
            }
        }
    }
    return true;                                                        
}

module.exports.every = every;

 /**
 * some: takes in a collection and returns true if even one element from <collection> passes a test function
 * 
 * @param {Array or Object} collection: an array or object containing elements to run a test function on to test for truthiness
 * 
 * @param {Function} func: a test function that will test each element in the <collection>, looking for a true value
 * 
 * @return {Boolean}: returns true if at least one element of <collection> returns true when passed into <func>; returns false if all elements return false when passed into <func>
 * 
 */
 
 function some(collection, func) {
     if (func === undefined) {
         let x = true;
        each(collection, function(element, index, collection) {
                if(!element) {
                 x = false; 
            }
        });
        
        return x; 
    }
   
    if (reject(collection, func).length === collection.length) {
       return false;
    } 
    
    return true; 
    
}

module.exports.some = some;


/**
 * reduce: Designed to take an array a function and a value
 * 
 * @param {Array} array: array to loop through

 * @param {Function} func: a test to run on the array

 * @param {*} seed: a data type that is the starting point that will
 * take all array elements and use the function to do something
 * 
 * @return {*}: takes the array and returns it to either a single value
 * or someother type of data. if there is no seed value assigned then the function
 * take the first element of the array and start looping on the second element
 */
 
 function reduce(array, func, seed) {
    if (seed === undefined) {                       
        seed = array[0];                                
        for (let i = 1; i < array.length; i++) {        
            seed = func(seed, array[i], i);            
        }
    } else {                                        
        for (let i = 0; i < array.length; i++) {        
            seed = func(seed, array[i], i);             
        }
    }
    return seed;                                    
}

module.exports.reduce = reduce;

 /**
 * extend: copies all properties from an object (and potentially multiple objects) to a passed in object
 * 
 * @param {Object} copyToObj: an object that all properties will be copied to
 * 
 * @param {Object} copyFrom: object(s) whose properties will be copied to the target object
 * 
 * @return {Object}: an object containing the properties of all objects passed in
 * 
 */
 
 function extend(copyToObj, ...copyFrom) {
    for (let i = 0; i < copyFrom.length; i++) {        
        for (let keys in copyFrom[i]) {                 
            copyToObj[keys] = copyFrom[i][keys];        
        }
    }
    return copyToObj;                                  
}

module.exports.extend = extend;