var names = ['micah', 'john', 'musa'];
console.log(names[0])


const ghtyey = ['first', 'second', 'third']
console.log(ghtyey[2]);

var year =  new Array('1990', '1991', '1992');
console.log(year[2]);



// indexOf and lastindexOf is used to search through the array for values
// indexOf is used to search through the array from the begining of the array
//lastIndexOf is used to serach through an array from the end of the array

// findIndex() and find() is used to find values inside an array ES6 syntax
// findIndex() returnes the index or position of the element that matches what you r looking for in the array 
// find() returnes the value of the  element.
// splice() is used to remove specific items from the array 


var barbers =['micah', 'abdul', 'sadiq']
barbers.push('hossana', 'johnbosco')
barbers.unshift('gabe', 'frankline')
// barbers.pop()
// barbers.shift('gabe')
// barbers[2] = "maluabuchukwu"
// barbers[0] = "gabrel"
let a = barbers.splice(2, 3)
// console.log(barbers.indexOf("sadiq"))
console.log(a, barbers)

console.log(barbers.lastIndexOf('gabrel'));

// if (barbers.indexOf("sadiq") === -1) {
//     console.log("does not Exist");
    
// } else {
//     console.log("Exist") 
    
// }

// barbers.indexOf("sadiq") === -1  ? console.log("does not exist") : console.log("exist");
console.log(barbers.indexOf("sadiq") === -1  ? "does not exist" : "exist");






//console.log('==========================OBJECTS=======================');

var Micah = {
    bestfood: "any good food",
    age: 27,
    profession: "barber and a student",
    eyeColor: "black",
    updateAge: function() {
        return ++Micah.age;
    }
}
console.log(Micah)
console.log(Micah["age"])
console.log(Micah.eyeColor)

Micah["hobby"] = "watching movies and playing games"; //adding a newkey value to my object
console.log(Micah)

delete  Micah["bestfood"]; //"delete" this is use to delete somthing from an object or delete a key value pair

console.log(Micah)




//console.log('==========================OBJECTS CONSTRUCTORS=======================');

function Person(bestfood, age, profession,eyeColor) {
    this.bestfood = bestfood;
    this.age = age;
    this.profession = profession;
    this.eyeColor = eyeColor;
    this.updateAge = function() {
        return ++this.age;
    }
}
var micah = new Person("any good food",  27, "barber and a student", "black");
console.log(micah);


// templete literate12