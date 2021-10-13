
// // An object literal
// var car = {
//     name: 'Chevrolet',
//     model: 'Camaro ZL1',
//     year: 2021,
//     color: 'white & black',
//     ownerName: 'BossMicah',
//     ownerNumber: '08169371046',
//     mileage:  '10 miles',

// }
// car.name= 'toyota'
// car.model = 'corola S'
// car.year = '2016'
// car['currentyear'] = '2021'
// car.color = 'white'
// car.ownerName = 'uche'
// car.ownerNumber = '08156782836'
// car.mileage = 5,
// console.log(car);
// // mutating(changing) a value in an object
// // car.name = "Chevrolet"   

// // adding a newkey value in an object
// // car["shape"] = "plane"

// // deletting a value in an object
// // delete car["year"]






var car2 = {
    name:  'toyota',
    model:  'corolla s',
    year:  2016,
    currentYear:  2021,
    mileage: 10,
    calcYearUsed: function() {
        return this.currentYear-this.year
    },
    calcCarMileage: function(mileage) {
    
        if(mileage < 50 ){
            return "This car is new"
        }
        else if(mileage >= 50 && mileage <= 100){
            return "This car has been used"
    }
    else if(mileage > 100){
        return "This care is old"
    }else{
        return "Oops!! Something happened"
    }
   
    }
      

}
console.log(car2.calcCarMileage(70));

var x = car2.calcYearUsed()

console.log(x)


// function Person(firstname, lastname, mass, height) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.mass = mass;
//     this.height = height;
//     this.calcBmi = function() {
//         return this.mass / this.height*this.height
//     }
// };


// var mark = new Person("Mark", "Smith", 80, 1.75, "this.calcBmi") 
// var john = new Person("John", "Emerald", 70, 1.74, "this.calcBmi") 
// var calcBmi = new Person(this.calcBmi)

// console.log(mark)
// console.log(john)

// console.log(calcBmi(70, 1.74))

      


var firstPerson = {
    firstname: 'Mark',
    lastname: 'Smith',
    mass: 80,
    height: 1.75,
    calcbmi: function() {
        height = this.height * this.height
        return Math.round(this.mass / height)
        // return result = result.toFixed(1)
    }
    
}

var secondPerson = {
    firstname: 'John',
    lastname: 'Emerald',
    mass: 100,
    height: 1.74,
    calcbmi: function() {
        height = this.height * this.height
        return Math.round(this.mass / height)
    }
    
}

var firstPersonbmi = firstPerson.calcbmi()
var secondPersonbmi = secondPerson.calcbmi()

console.log(firstPersonbmi)
console.log(secondPersonbmi)

if(firstPersonbmi > secondPersonbmi){
    console.log(firstPerson.firstname + " " + firstPerson.lastname + " has the highest bmi which is " + firstPerson.calcbmi())
}
else{
    console.log(secondPerson.firstname + " " + secondPerson.lastname + " has the highest bmi which is " + secondPerson.calcbmi())
}















// console.log(Math.max(secondPerson.calcbmi(), firstPerson.calcbmi()))
































