// var weekoftheday = 3

// if (weekoftheday == 1) {
//     console.log("monday")
// }
// else if (weekoftheday == 2) {
//     console.log("tuesday")
// }

// else if (weekoftheday == 3) {
//     console.log("wednesday")
// }

// else if (weekoftheday == 4) {
//     console.log("thursday")
// }

// else if (weekoftheday == 5) {
//     console.log("friday")
// }

// else if (weekoftheday == 6) {
//     console.log("saturday")
// }

// else if (weekoftheday == 7) {
//     console.log("sunday")
// }


// var weekoftheday = 1;

// switch (weekoftheday) {
//     case 1:
//         case "1":
//         console.log("monday")
//         break;

//     case 2:
//         console.log("tuesday")
//         break;

//     case 3:
//         console.log("wednesday")
//         break;

//     case 4:
//         console.log("thursday")
//         break;

//     case 5:
//         console.log("friday")
//         break;

//     case 6:
//         console.log("saturday")
//         break;

//     case 7:
//         console.log("sunady")
//         break;

//     default:
//         console.log("you exceeded the days of the week or you inputed a wrong data")


// }


// var network = 45


// if (network == 1 || network == 2 || network == 3 ) {
//     console.log("MTN")
// }
// else if (network == 7 || network == 8 || network == 9) {
//     console.log("GLO")
// }
// else if (network == 4 || network == 5 || network == 6) {
//     console.log("AIRTEL")
// }
// else {
//     console.log("This number belongs to other network")
// }


var network = 4
var GLO = 'GLO'
var AIRTEL = 'AIRTEL'
var MTN = 'MTN'
var OTHERS = 'This number belongs to other network'


switch (network) {
    case 1:
    case 2:
    case 3:
        console.log(MTN)
        break;

    case 4:
    case 5:
    case 6:
        console.log(AIRTEL)
        break;

    case 7:
    case 8:
    case 9:
        console.log(GLO)
        break;

    default:
        console.log(OTHERS)


}