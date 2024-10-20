const favSingers = ["Beatiful Things", "Bensoon Bone", "NF"];
console.log(favSingers[1]);

const favNumbers = [321, 123, 1, 23];
console.log(favNumbers);

const mixedArr = ["string", ["otherarray"], 123, true]
// console.log(mixedArr);
console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);

//const fruitss = [
//    "apples",
//    "dragonfruit",
//    "mango",
//    "apple",
//    "orange",
//    "corn",
//];

//fruits.push('Banana');
//console.log(fruits);
//fruits.pop();
//console.log(fruits);

// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// fruits.unshift('oranges');
// console.log(fruits);

const Fruit = ['apples', 'pomegranate', 'mango',];
const moreFruit = ['stawberries', 'pineapple', 'grapefruit',];
const totalFruit = Fruit.concat(moreFruit);

console.log(totalFruit);

//------------------------------------------------------//

const pl = ["JavaScript", "Golang", "Python", "PHP"];
const numbers = [3,5,2,4,1];

// console.log(pl.includes("Golang"));
// console.log(pl.join("-"));
// console.log(pl.reverse(""));
console.log(pl.slice(0, 2));

console.log(numbers);
console.log(numbers.sort());


// OBJECTS -> 'orange'

const person = {
    firstName: "shandika",
    lastName: "WebDev" ,
    age: 18,
    location: ["Planet", "Earth"],
    isProgrammer: true,
};

// Accesssing Items from our object

//console.log(person.firstName);
//console.log(person.lastName);
//console.log(person.age);
//console.log(person.location);
//console.log(person.isProgrammer);


console.log(person["firstName"]);
console.log(person["location"]);
