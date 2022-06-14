var mes1 = document.getElementById("message1");

// Exercise # 1

var str = "<h1>JS Assignment # 18 - 20 FOR LOOPS</h1><h2><u>Exercise # 1</u></h2>";

for (var i = 0; i < 5; i++) {
    str+= "<h1>Hello World</h1>";
}

// Exercise # 2

str+= "<h2><u>Exercise # 2</u></h2>";

for (var i = 0; i < 10; i++) {
    str+= "<h3>" + (i + 1) + "</h3>";
}


mes1.innerHTML = str;

// Exercise # 3

str = "<h2><u>Exercise # 3</u></h2>";


var mes2 = document.getElementById("message2");
var tableNumber = parseInt(prompt("Enter a number to print its multiplication table"));
var tableTimes = parseInt(prompt("Enter length of multiplication table"));

str+= "<h3>Multiplication table of " + tableNumber + "<br />Length " + tableTimes + "</h3>"

for (var i = 0; i < tableTimes; i++) {
    str+= "<h3>" + tableNumber + " X " + (i + 1) + " = " + (tableNumber * (i + 1)) + "</h3>";
}

// Exercise # 4

str+= "<h2><u>Exercise # 4</u></h2>";


var arr = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (var i = 0; i < arr.length; i++) {
    str+= "<h3>" + arr[i] + "</h3>";
}

mes2.innerHTML = str;

// Exercise # 5

str = "<h2><u>Exercise # 5</u></h2>";


var mes3 = document.getElementById("message3");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    str+= "<h3>" + fruits[i] + "</h3>";
}

for (var i = 0; i < fruits.length; i++) {
    str+= "<h3>Element at index " + i + " is " + fruits[i] + "</h3>";
}

mes3.innerHTML = str;

// Exercise # 6

str = "<h2><u>Exercise # 6</u></h2>";

var mes4 = document.getElementById("message4");
var itemsNumber = parseInt(prompt("Enter number of items"));
var itemsArray = [];

for (var i = 0; i < itemsNumber; i++) {
    itemsArray[i] = prompt("Enter value for index " + i);
}

str+= "<h3>Number of items: " + itemsNumber + "<br />Items: </h3>"

for (var i = 0; i < itemsArray.length; i++) {
    str+= "<h3>" + itemsArray[i] + "</h3>";
}

mes4.innerHTML = str;

// Exercise # 7

str = "<h2><u>Exercise # 7</u></h2>";

var mes5 = document.getElementById("message5");
str+= "<h1>Counting:</h1><h3>";

for (var i = 0; i < 15; i++) {
    str+= (i + 1) + ", ";
}

str+= "</h3><h1>Reverse Counting:</h1><h3>"

for (var i = 10; i > 0; i--) {
    str+= i + ", ";
}

str+= "</h3><h1>Even:</h1><h3>"

for (var i = 0; i < 21; i+=2) {
    str+= i + ", ";
}

str+= "</h3><h1>Odd:</h1><h3>"

for (var i = 1; i < 20; i+=2) {
    str+= i + ", ";
}

str+= "</h3><h1>Series:</h1><h3>"

for (var i = 2; i < 21; i+=2) {
    str+= i + "k, ";
}

str+= "</h3>"

// Exercise # 8

str+= "<h2><u>Exercise # 8</u></h2>";

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemOrdered = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");

var flag = false;

for (var i = 0; i < bakeryItems.length ; i++) {
    if (bakeryItems[i].toLowerCase() === itemOrdered.toLowerCase()){
        str+= "<p>" + itemOrdered.toLowerCase() + " is <b>available</b> at index " + i + " in our bakery</p>"
        flag = true;
        break;
    }
}

if (!flag){
    str+= "<p>We are sorry. " + itemOrdered.toLowerCase() + " is <b>not available</b> in our bakery</p>"
}

// Exercise # 9

str+= "<h2><u>Exercise # 9</u></h2>";

var numArray = [24, 53, 78, 91, 12];
var largestNumber = numArray[0];
var smallestNumber = numArray[0];

for (var i = 0; i < numArray.length ; i++) {
    if (largestNumber < numArray[i] ){
        largestNumber = numArray[i];
    }
    if (smallestNumber > numArray[i] ){
        smallestNumber = numArray[i];
    }
}

str+= "<p>Array items: ";

for (var i = 0; i < numArray.length; i++) {
    str+= numArray[i] + ", ";
}

str+= "<br/>The largest number is " + largestNumber + "</p>"

// Exercise # 10

str+= "<h2><u>Exercise # 10</u></h2>";

str+= "<p>Array items: ";

for (var i = 0; i < numArray.length; i++) {
    str+= numArray[i] + ", ";
}

str+= "<br/>The smallest number is " + smallestNumber + "</p>"

// Exercise # 11

str+= "<h2><u>Exercise # 11</u></h2>";

str+= "<p>Array items: ";

for (var i = 0; i < numArray.length; i++) {
    str+= numArray[i] + ", ";
}

str+= "<br/>The largest number is " + largestNumber 
str+= "<br/>The smallest number is " + smallestNumber + "</p>"

// Exercise # 12

str+= "<h2><u>Exercise # 12</u></h2>";

str+= "<p>Multiple of 5 ranging from 1 to 100:<br/>"
for (var i = 5; i < 101; i+=5) {
    str+= i + ", ";
}

str+= "</p>"

// Exercise # 13

str+= "<h2><u>Exercise # 13</u></h2>";

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

str+= "<table border='1'><tr><th>Students</th><th>Scores</th>"
for (var i = 0; i < students.length; i++) {
    str+= "<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>";
}
str+= "</table>"

// Exercise # 14

str+= "<h2><u>Exercise # 14</u></h2><p>";

var score = [12, 45, 3, 22, 34, 50];
var stopValue = parseInt(prompt("Please enter stop value exists in array"));
var numFound = false;
var tempStr = "";

for (var i = 0; i < score.length; i++) {
    if(stopValue !== score[i]){
        tempStr+= score[i] + ", ";
    }
    else{
        numFound = true;
        tempStr+= score[i] + ", ";
        break;
    }
}

if (!numFound){
    str+= "The number you entered does not exist in array</p>"
}
else{
    str+= tempStr + "</p>"
}

// Exercise # 15

str+= "<h2><u>Exercise # 15</u></h2><p>";

var numArrOfArr = [ [1,2,3] , [4,5,6] , [7,8,9] ];

for (var i = 0; i < numArrOfArr.length; i++){
    for(var j = 0; j < numArrOfArr.length; j++){
      str+= numArrOfArr[i][j] + " ";
    }
    str+= "<br/>";
}

str+= "</p>"

// Exercise # 16

str+= "<h2><u>Exercise # 16</u></h2><p>";

var num1 = parseInt(prompt("Enter a number"));

for (var i = num1; i > -0.5; i-=0.5) {
    str+= i + ", ";
}

str+= "</p>"

// Exercise # 17

str+= "<h2><u>Exercise # 17</u></h2><p>";

for (var i = 0; i < 21; i++) {
    if((i % 2) === 0){
        str+= i + " is even" + "<br/>"
    }
    else{
        str+= i + " is odd" + "<br/>"
    }
}

str+= "</p>"

// Exercise # 18

str+= "<h2><u>Exercise # 18</u></h2><p>";
var oddProduct = 1;

for (var i = 0; i < 8; i++) {
    if((i % 2) !== 0){
        oddProduct*= i; 
    }
}

str+= "The product of the odd integers from 1 to 7 is " + oddProduct + "</p>"


// Exercise # 19

str+= "<h2><u>Exercise # 19</u></h2><p>";

var numOfStars = parseInt(prompt("Enter initial number of stars"));

for (var i = numOfStars; i > 0; i--) {
    for(var j = i; j > 0; j--){
        str+= "*";
    }
    str+= "<br/>"
}

// Exercise # 20

str+= "<h2><u>Exercise # 20</u></h2><p>";

var numOfPatLines = parseInt(prompt("Enter number of lines to create patterns"));

for (var i = 0; i < numOfPatLines; i++) {
    for(var j = 0; j < numOfPatLines ; j++){
        str+= "*";
    }
    str+= "<br/>"
}

str+= "<br/>"

for (var i = 0; i < numOfPatLines; i++) {
    for(var j = 0; j <= i ; j++){
        str+= "*";
    }
    str+= "<br/>"
}

str+= "<br/>"

for (var i = numOfPatLines; i > 0; i--) {
    for(var j = i; j > 0; j--){
        str+= "*";
    }
    str+= "<br/>"
}

mes5.innerHTML = str;


// JS Assignment # 21 - 25 STRINGS METHODS

var mes6 = document.getElementById("message6");

// Exercise # 1

str = "<h1>JS Assignment # 21 - 25 STRINGS METHODS</h1><h2><u>Exercise # 1</u></h2>";
var fName = prompt("Enter your first name");
var lName = prompt("Enter your last name");
var fullName = fName + " " + lName;

str+= "<h1>Welcome " + fullName + "!</h1>";

// Exercise # 2

str+= "<h2><u>Exercise # 2</u></h2>";
var favMobile = prompt("Please enter your favorite mobile phone model");

str+= "<p>My favorite phone is: " + favMobile + "<br/>Length of string: " + favMobile.length + "</p>";

// Exercise # 3

str+= "<h2><u>Exercise # 3</u></h2>";
var text = "Pakistani";

str+= "<p>String: " + text + "<br/>Index of 'n': " + text.indexOf("n") + "</p>";

// Exercise # 4

str+= "<h2><u>Exercise # 4</u></h2>";
var text1 = "Hello World";

str+= "<p>String: " + text1 + "<br/>Last index of 'l': " + text1.lastIndexOf("l") + "</p>";

// Exercise # 5

str+= "<h2><u>Exercise # 5</u></h2>";

str+= "<p>String: " + text + "<br/>Character at index 3: " + text.charAt(3) + "</p>";

// Exercise # 6

str+= "<h2><u>Exercise # 6</u></h2>";

var fullName1 = fName.concat(" " + lName);

str+= "<h1>Welcome " + fullName1 + "!</h1>";

// Exercise # 7

str+= "<h2><u>Exercise # 7</u></h2>";

var city = "Hyderabad";
var repCity = city.replace("Hyder", "Islam");

str+= "<p>City: " + city + "<br/>After replacement: " + repCity + "</p>";

// Exercise # 8

str+= "<h2><u>Exercise # 8</u></h2>";

var message = "Ali and Sami are best friends. They play cricket and football together."
var repMessage = message.replace(/and/g, "&");

str+= "<p>Message: " + message + "<br/>After replacement: " + repMessage + "</p>";

// Exercise # 9

str+= "<h2><u>Exercise # 9</u></h2>";

var myStr = "472";
var myNum = Number(myStr);

str+= "<p>Value: " + myStr + "<br/>Type: " + typeof (myStr) + "<br/>Value: " + myNum + "<br/>Type: " + typeof(myNum) + "</p>";

// Exercise # 10

str+= "<h2><u>Exercise # 10</u></h2>";

var inputUrl = prompt("Please enter url in following format (www.facebook.com/www.yahoo.com )");
var indNum = inputUrl.indexOf(".");
var domain = inputUrl.slice(indNum + 1);

str+= "<p>URL: " + inputUrl + "<br/>Domain: " + domain + "</p>";

// Exercise # 11

str+= "<h2><u>Exercise # 11</u></h2>";

var inputStr1 = prompt("Please enter text in lower case");

str+= "<p>User input: " + inputStr1 + "<br/>Upper case: " + inputStr1.toUpperCase() + "</p>";

// Exercise # 12

str+= "<h2><u>Exercise # 12</u></h2>";

var inputStr2 = prompt("Please enter text in upper case");

str+= "<p>User input: " + inputStr2 + "<br/>Lower case: " + inputStr2.toLowerCase() + "</p>";

// Exercise # 13

str+= "<h2><u>Exercise # 13</u></h2>";

var inputStr3 = prompt("Please enter text either lower or upper case");
var titleStr = inputStr3.charAt(0).toUpperCase() + inputStr3.substring(1).toLowerCase();

str+= "<p>User input: " + inputStr3 + "<br/>Title case: " + titleStr + "</p>";

// Exercise # 14

str+= "<h2><u>Exercise # 14</u></h2>";

var num2 = 35.36;
var numToStr = String(num2);
var indexDot = numToStr.indexOf(".");
numToStr = numToStr.slice(0, indexDot) + numToStr.slice(indexDot + 1);

str+= "<p>Number: " + num2 + "<br/>Result: " + numToStr + "</p>";

// Exercise # 15

str+= "<h2><u>Exercise # 15</u></h2>";

var a = "3", b="3";

str+= "<p>a is " + a + "<br/>b is " + b + "<br/>a + b is " + a+b + "</p>";

// Exercise # 16

str+= "<h2><u>Exercise # 16</u></h2>";

str+= "<p>a is " + a + "<br/>b is " + b + "<br/>a - b is " + (a-b) + "</p>";

// Exercise # 17

str+= "<h2><u>Exercise # 17</u></h2>";

// Exercise # 18

str+= "<h2><u>Exercise # 18</u></h2>";

var bakeryItems1 = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemOrdered1 = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");

var flag1 = false;

for (var i = 0; i < bakeryItems1.length ; i++) {
    if (bakeryItems1[i].toLowerCase() === itemOrdered1.toLowerCase()){
        str+= "<p>" + itemOrdered1.toLowerCase() + " is <b>available</b> at index " + i + " in our bakery</p>";
        flag1 = true;
        break;
    }
}

if (!flag1){
    str+= "<p>We are sorry. " + itemOrdered1.toLowerCase() + " is <b>not available</b> in our bakery</p>";
}

// Exercise # 19

str+= "<h2><u>Exercise # 19</u></h2>";

var strComp1 = prompt("Enter first string to compare");
var strComp2 = prompt("Enter second string to compare");
let compResult = strComp1.localeCompare(strComp2);

if (compResult === 1){
    str+= "<p>" + strComp1 + " is greater than " + strComp2 + "</p>";
    
}
else if(compResult === -1){
    str+= "<p>" + strComp1 + " is less than " + strComp2 + "</p>";
}
else{
    str+= "<p>" + strComp1 + " is equal to " + strComp2 + "</p>";
}

// Exercise # 20

str+= "<h2><u>Exercise # 20</u></h2>";


// Exercise # 21

str+= "<h2><u>Exercise # 21</u></h2><p>";

var university = "University of Karachi";
let universityArray = university.split('');

for (var i = 0; i < universityArray.length; i++){
    str+= universityArray[i] + "<br/>";
}

str+= "</p>";

// Exercise # 22

str+= "<h2><u>Exercise # 22</u></h2>";

var inputStr4 = prompt("Enter string");
let strLen = inputStr4.length;

str+= "<p>User input: " + inputStr4 + "<br/>Last character of input: " + inputStr4.charAt(strLen - 1) + "</p>";

// Exercise # 23

str+= "<h2><u>Exercise # 23</u></h2>";

var paraText ="The quick brown fox jumps over the lazy dog";
let counter = 0;

for(var i = 0; i < paraText.length; i++){
    if (paraText.substring(i, i+3).toLowerCase() === "the") {
        counter+= 1;
    }
}

str+= "<p>Text: " + paraText + "<br/>There are " + counter + " occurrence(s) of the word 'the'</p>"

// Exercise # 24

str+= "<h2><u>Exercise # 24</u></h2>";

var inputStr5 = prompt("Enter string");
let strLength = inputStr4.length;
let vowels = 0, consonants = 0;

for(var i = 0; i < inputStr5.length; i++) {
    if (inputStr5.charAt(i) === "A" || inputStr5.charAt(i) === "a" || inputStr5.charAt(i) === "E" || inputStr5.charAt(i) === "e" || inputStr5.charAt(i) === "I" || inputStr5.charAt(i) === "i" || inputStr5.charAt(i) === "O" || inputStr5.charAt(i) === "o" || inputStr5.charAt(i) === "U" || inputStr5.charAt(i) === "u"  ) {
        vowels+= 1;
    }
    else {
        consonants+= 1;
    }
}

str+= "<p>Input String: " + inputStr5 + "<br/>Vowels in the string: " + vowels + "<br/>Consonants in the string: " + consonants + "</p>";


mes6.innerHTML = str;
