


// A simple tips calculator using array and function

var johnRestaurantsBills = [124, 48, 268, 400, 200, 674,40]
for (var i=0; i<johnRestaurantsBills.length; i++) {
    console.log(i+1 +". ")
    console.log("bills:" +johnRestaurantsBills[i])
    console.log("Tips:" +[tipsCal(johnRestaurantsBills[i])])
    console.log(" ")

    
}


function tipsCal(bills) {
   
      if (bills < 50) {
        return 20*bills/100;
    }
    else if(bills  >=50 && bills <=200 ) {
        return 15*bills/100;
    }
    else if(bills > 200) {
        return 10*bills/100;
    }
    
}



   


