/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.
function somethingFunny() {
    return ("Coffee doesn't ask silly questions, coffee understands...");
};

document.getElementById("q1").innerHTML = somethingFunny();



// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.


function divideByTwo(number) {
    return number / 2;
};

document.getElementById("callDivideByTwo").addEventListener("click", function() {
    document.getElementById("q2").innerHTML = divideByTwo(document.getElementById("userNumDivide2").value);
});



// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
function greeting(firstName, otherName) {
    return ("Oh hey, " + firstName + " and " + otherName + "!");
};


document.getElementById("callGreeting").addEventListener("click", function() {
    document.getElementById("q3").innerHTML = greeting(document.getElementById("firstName").value, document.getElementById("otherName").value);
});


// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
function avg6(num1, num2, num3, num4, num5, num6) {
    return ((num1 + num2 + num3 + num4 + num5 + num6) / 6);
}

document.getElementById("callAverageNumbers").addEventListener("click", function() {
    document.getElementById("q4").innerHTML = avg6(2, 3, 4, 5, 6, 7);
});





// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.

var total = function(price, cans) {
    return (price * cans)
}
var cashews = total(7.99, 6);
// console.log("Your total this month is $" + total(7.99,6) + ".");

document.getElementById("q5").innerHTML = cashews;

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area(num1, num2) {
    return (num1 * num2)
};

function perimeter(num1, num2) {
    return (2 * (num1 + num2))
};
console.log("Area", area(7, 10));
console.log("Perimeter", perimeter(7, 10));
var a1 = area(7, 10);
var p1 = perimeter(7, 10)
document.getElementById("q6a").innerHTML = a1
document.getElementById("q6b").innerHTML = p1



// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
function quarter(number) {
    return (number / 4);
};
document.getElementById("quarterButton").addEventListener("click", function() {
    document.getElementById("q7").innerHTML = quarter(document.getElementById("quartered").value)
})




// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
// Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
// If the number of hours is less than 8, print a statement recommending the user get more shut eye.
function sleepings(hours) {
    if (hours >= 8) {
        return ("I'm very jealous of your sleep patterns.");
    } else {
        return ("Life is too busy for 8 hours. ");
    }
};

document.getElementById("checkHours").addEventListener("click", function() {
    document.getElementById("q8").innerHTML = sleepings(document.getElementById("sleptHours").value)
})


console.log(8);
console.log(6);
console.log(9);

// 9. Develop a function that determines a person's age by asking them for their birth year.
function age(birthYear) {
    return (2016 - birthYear)
};
document.getElementById("ageButton").addEventListener("click", function() {
    document.getElementById("q9").innerHTML = age(document.getElementById("year").value)
})





// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.

teammates = [" Harold", " Bob", " Sue", " Grady", " Notorious B.I.G.", " JavaCrypt", " Weird guy in the back", " Gary", " Carol", " Hipster Tim", " Janet"]

var teamA = [];
var teamB = [];

function newTeams(arrayOfPeople) {
    for (i = 0; i < arrayOfPeople.length; i += 2) {
        teamA.push(arrayOfPeople[i]);
    }
    for (i = 1; i < arrayOfPeople.length; i += 2) {
        teamB.push(arrayOfPeople[i]);
    }



    document.getElementById("q10a").innerHTML = "Team A: " + teamA;
    document.getElementById("q10b").innerHTML = "Team B: " + teamB;
};
newTeams(teammates);







// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.
var addThree = document.getElementById("q11input")

function addThreeNums(userInput) {
    console.log(userInput.value);


    var splits = userInput.value.split("");
    var sum = 0
    for (i = 0; i < splits.length; i++) {
        var num = parseInt(splits[i]);

        sum += num;
    }
    return sum;
}
document.getElementById("q11btn").addEventListener("click", function() {

    document.getElementById("q11").innerHTML = addThreeNums(addThree);
});




// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.
function countingChange(quarters, dimes, nickels, pennies) {
    var quartersTotal = (quarters * .25);
    var dimesTotal = (dimes * .10);
    var nickelsTotal = (nickels * .05);
    var penniesTotal = (pennies * .01);
    var total = (quartersTotal + dimesTotal + nickelsTotal + penniesTotal);
    return "Your piggybank has $" + total.toFixed(2);
}

document.getElementById("callTotal").addEventListener("click", function() {
    var quarters = document.getElementById("quarterAmount").value
    var dimes = document.getElementById("dimeAmount").value
    var nickels = document.getElementById("nickelAmount").value
    var pennies = document.getElementById("pennyAmount").value
    document.getElementById("q12").innerHTML = countingChange(quarters, dimes, nickels, pennies);
});








// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
function mrClean(phone) {
    var phone = phone.toString();
    if (phone.length < 10 || phone.length > 11) {
        return "That is not a valid number.";
    } else if (phone.length === 11) {
        if (phone.charAt(0) == (1)) {
            var cleanString = phone.substring(1);
            return "Yay, that is a valid number!";

        } else {
            return "That is not a valid number.";
        }
    } else {
        return phone;
    }
  };
    document.getElementById("getResult").addEventListener("click", function() {
        document.getElementById("q13").innerHTML = mrClean(document.getElementById("enterNumber").value);
    });



    // B. Create a function that determines whether a parameter is a number or not.
    //     Iterate over the elements in the following array to determine if each is a number.
    //     HINT: You may need to use the isNaN method.
    arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

function checkIt(array) {
  for(i=0; i<array.length; i++) {
    if (isNaN(array[i])) {
      console.log(array[i] + " is not a number!");
    } else {
      console.log(array[i] + " IS a number!");
    }
  }
}

checkIt(arrayOfAllTheThings);

document.getElementById("q14").innerHTML = checkIt(arrayOfAllTheThings);


    // C. Create a die rolling function that accepts no parameters.
    //     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
    //     Display the result in the HTML page.
    //     To get the random number rolled by each die, use Math.random and Math.floor.
function dieRolling (){
  total = Math.floor(Math.random() * 6) + 1;
  total += Math.floor(Math.random() * 6) + 1;
  return "My roll " + total + ".";

};
document.getElementById("callRoll").addEventListener("click", function(){
  document.getElementById("q15").innerHTML = dieRolling();
});


    // D. Using your die roll function above, figure out how many times it would take a user
    //     to get around a Monopoly board once. A monopoly board has 40 spaces total.
    function rollDice(){
      var total = 0;

      dieOne = Math.floor(Math.random() * 6) + 1;
      dieTwo = Math.floor(Math.random() * 6) + 1;

      var roll = dieOne + dieTwo;

      total += roll;
      count = 1;

      while (total <= 40){
        dieOne = Math.floor(Math.random() * 6) + 1;
        dieTwo = Math.floor(Math.random() * 6) + 1;
        var roll = dieOne + dieTwo;
        total += roll;
        count ++;

      }
      return "It took me " + count + " rolls to get around the board."
    }
    document.getElementById("q16").innerHTML = rollDice();


    // E. Write a function that takes a year from a user
    //    and reports whether or not it is a leap year.
    //    Display the result in the HTML page.
    //    Remember, a leap year occurs:
    //        On every year that is evenly divisible by 4
    //        Except every year that is evenly divisible by 100
    //        Unless the year is also evenly divisible by 400
    //        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
function leapYear(year){
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
    return  (year + "is a leap year");
  } else {
    return (year + "is not a leap year");
  }
};
document.getElementById("callLeapYear").addEventListener("clicl", function(){
  document.getElementById("q17").innerHTML = leapYear(document.getElementById("enterYear").value)
});
