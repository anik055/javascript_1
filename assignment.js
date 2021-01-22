// https://github.com/anik055/javascript_1

//1st function

function kilometerToMeter (kilometer) {
    if (kilometer >= 0) {                   // check if input value is valid
    var meter = 1000 * kilometer;           //we know 1 kilometer = 1000 meter.
    return meter;
    }
    else {
        return "unexpected input value";    // warning for unexpected value
    }
}
console.log(kilometerToMeter(5));


//2nd function

function budgetCalculator (watch, phone, laptop) {
    if ( watch>= 0 && phone>= 0 && laptop >= 0){                // check if input value is valid
        totalBudget = ((watch * 50) + (phone * 100) + (laptop * 500));
        return totalBudget;
    }
    else{
        return "unexpected input value";       // warning for unexpected value
    }
}
console.log(budgetCalculator(2,1,3));


//3rd function

function hotelCost (days) {
    var totalCost = 0;
    if (days >= 0){                    // check if input value is valid
        if (days<=10) {
            totalCost = days * 100 ;
        }
        else if (days<=20) {
            var remainingDays = days - 10 ;
            totalCost = (10 * 100) + (remainingDays * 80) ;
        }
        else {
            var remainingDays = days - 20;
            totalCost = (10 * 100) + (10 * 80) + (remainingDays * 50);
        }
        return totalCost;
    }
    else {
        return "unexpected input value";           // warning for unexpected value
    }
}
console.log(hotelCost(35));


//4th function

function megaFriend(friends) {
    if (typeof friends === 'object') {              // check if input value is valid
        var highestLength = "";                    //let , highestLength is an empty string
        for (var i = 0; i<friends.length; i++) {   
            if (typeof friends[i] === 'string') {                  // check if input value is valid
                if (highestLength.length<friends[i].length) {     //check if existing length is less or not
                    highestLength = friends[i];                  // assigns new higher length than before
                }
            }
            else {
                return "one or more unexpected input value";        // warning for unexpected value if any of the value is not string
            }
        }
        return highestLength;
    }
    else {
        return "unexpected input value !! input an array of string"    // warning for unexpected value if input parameter is not an array of string
    }
}
console.log(megaFriend(['anik','bunny','abdullah']));