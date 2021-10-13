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