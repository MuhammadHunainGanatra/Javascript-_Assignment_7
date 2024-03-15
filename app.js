//Task No 1//
document.write("<h1>Task # 1</h1>");
var provices= prompt("Enter a Your Provices Name").toLowerCase();
if( provices ==="sindh"){
    alert("Welcome to city of lights");
    document.write("Welcome to city of lights");

}
else if( provices === "punjab" ){
    alert("Welcome to Punjab");
    document.write("Welcome to Punjab");
}
else if( provices === "balochistan" ){
    alert("Welcome to balochistan");
    document.write("Welcome to balochistan");
}
else if( provices === "kpk" ){
    alert("Welcome to Khyber Pakhtunkhwa");
    document.write("Welcome to Khyber Pakhtunkhwa");
}
else if( provices === "khyberpakhtunkhwa" ){
    alert("Welcome to Khyber Pakhtunkhwa");
    document.write("Welcome to Khyber Pakhtunkhwa");
}
else {
alert("This is not a Pakistani");
document.write("This is not a Pakistani");
}
document.write("</br>");
//Task No 2//
document.write("<h1>Task # 2</h1>");
var gender= prompt("Enter  Your Gender").toLowerCase();
if( gender ==="male"){
    alert("Good Morning SIr");
    document.write("Good Morning SIr");

}
else if( gender === "female" ){
    alert("Good Morning Maam.");
    document.write("Good Morning Maam.");
}

else {
alert("Plase Enter a Correct gender");
document.write("Plase Enter a Correct gender");
}
document.write("</br>");
//Task No 3//
document.write("<h1>Task # 3</h1>");
var color= prompt("Enter a color of road traffic signal").toLowerCase();
if( color ==="red"){
    alert("Must Stop");
    document.write("Must Stop");

}
else if( color === "yellow" ){
    alert("Ready to move");
    document.write("Ready to move");
}
else if( color === "green" ){
    alert("Move now");
    document.write("Move now");
}

else {
alert("Enter a Correct  traffic color signal name");
document.write("Enter a Correct  traffic  signal color  name");
}
document.write("</br>");
//Task No 4//
document.write("<h1>Task # 4 </h1>");
var num1= +prompt("Enter a number fuel in your car")
if( 1 < num1){
    alert("No tention you drive your car");
    document.write("No tention  drive your car");

}
else {
alert("Please refill the fuel in your car ");
document.write("Please refill the fuel in your car");
}
document.write("</br>");
document.write("</br>");
//Task No 5//
document.write("<h1>Task # 5 </h1>");
var a =(4);
if(++a ===5){
alert("Given Condition is true");
document.write("Given Condition is true");
}
else{
    alert("Given Condition is  not true");
    document.write("Given Condition is not true");
}
document.write("</br>");
var b=(82);
if (b++ ===83){
    alert("Given Condition for varible  is true");
    document.write("Given Condition for varible  is true");
}
else{
    alert("Given Condition for varible  is not true");
    document.write("Given Condition for varible  is not  true");
}
document.write("</br>");
var c=(12);
if(c ===13){
    alert(" Condition one true is  true");
    document.write("Condition one  true is  true");
}
else{
    alert(" Condition  one is not  true");
    document.write("Condition  one is  not  true")
}
document.write("</br>");
if(c++ ===13){
    alert(" Condition two  is  true");
    document.write("Condition two   is  true");
}
else{
    alert(" Condition  two is not  true");
    document.write("Condition  two is  not  true")
}
document.write("</br>");
if(++c < 14){
    alert(" Condition three is  true");
    document.write("Condition three   is  true");
}
else{
    alert("Condition three  is not true");
    document.write("Condition three  is not true");
}
document.write("</br>");
if(c === 14){
    alert(" Condition four  is  true");
    document.write("Condition four  is  true");
}
else{
    alert("Condition four  is not true");
    document.write("Condition four  is not true");
}
document.write("</br>");
var materialcost=(20000);
var laborCost=(2000);
var totalcost=materialcost+laborCost;
if(totalcost === laborCost + materialcost){
    alert("The Cost equal");
    document.write("The Cost equal");
}
else{
    alert("The Cost is not equal");
    document.write("The Cost is not equal");
}
document.write("</br>");
var color= prompt("Enter a True/False ").toLowerCase();
if(color ="true"){
    alert("True");
    document.write("True");
}
else{
    alert("False");
    document.write("False");
}
document.write("</br>");
//Task No 6//
document.write("<h1>Task # 6 </h1>");
document.write("<h3> MarkSheet </h3>");
var number1=+prompt("Enter Subject 1 Marks");
var number2=+prompt("Enter Subject 2 Marks");
var number3=+prompt("Enter Subject 3 Marks");
var obtainedmarks=(number1+number2+number3);
var totalmarks=(300);
document.write("Total Marks : 300");
document.write("</br>");
document.write(`Marks Obtained : ${obtainedmarks}`);
document.write("</br>");
var percentage=((obtainedmarks/totalmarks) *100);
document.write(`Percentage : ${percentage} %`);
document.write("</br>");
if(percentage <=60){
    document.write('Grade = B');
    document.write("</br>");
    document.write('You need to improve');
}
else if(percentage <=70){
    document.write('Grade = A');
    document.write("</br>");
    document.write('Good');

}
else if(percentage <=80){
    document.write('Grade = A-one');
    document.write("</br>");
    document.write('Excellent');

}
else{
    document.write('Grade = fail');
    document.write("</br>");
    document.write('Sorry');
}
//Task No 7//
document.write("<h1>Task # 7 </h1>");
document.write("<h3>Guess game: </h3>");
var hint1=+prompt("Enter a Number Under 1 to 10");
if(hint1 =="1"){
    document.write("Near To A Number");
}
else if(hint1 =="2"){
    document.write("YOU GUESS CORRECT");
}
else if(hint1 =="3"){
    document.write("Near To A Number");
}
else if(hint1 =="4"){
    document.write("YOU GUESS CORRECT");
}
else if(hint1 =="5"){
    document.write("Near To A Number");
}
else if(hint1 =="6"){
    document.write("YOU GUESS CORRECT");
}
else if(hint1 =="7"){
    document.write("Near To A Number");
}
else if(hint1 =="8"){
    document.write("YOU GUESS CORRECT");
}
else if(hint1 =="9"){
    document.write("Near To A Number");
}
else if(hint1 =="10"){
    document.write("YOU GUESS CORRECT");
}
else{
    document.write("YOUR GUESS NUMBER IS NOT CORRECT </br> Hint is  </br> Enter a Even Number");
}
document.write("</br>");
//Task No 8//
document.write("<h1>Task # 8 </h1>");
var divide=+prompt("Enter a number this is divisible by 3 ")
if( divide % 3 == 0){
    document.write("This number is divisible by 3");
}
else{
document.write("try another number which is divisible by 3");
}
//Task No 9//
document.write("<h1>Task # 9 </h1>");
var di=+prompt("Enter a number to Check this number");
if( di % 2 == 0){
    document.write("This Number is Even ");
}
else{
document.write("This number is Odd");
}
//Task No 10//
document.write("<h1>Task # 10 </h1>");
var T=+prompt("Enter a Temperature  Number");
if( T >=40){
    document.write("It is too hot outside.");
}
else if( T >=30){
    document.write("The Weather today is Normal.");
}
else if( T >=20){
    document.write("Today Weather is cool.");
}
else if( T >=10){
    document.write("OMG! Today weather is so Cool.");
}
else{
document.write("Enter a value under 40");
}
//Task No 11//
document.write("<h1>Task # 11 </h1>");
var firstnumber=+prompt("Enter a First number");
var secondnumber=+prompt("Enter a Second Number");
var result=prompt("Enter any operation + , /, % , -,*");
if( result === "+"){
    document.write("Result of + ="  +(firstnumber + secondnumber));
}
else if(result === "-"){
    document.write("Result of - ="  +(firstnumber - secondnumber));
}
else if(result === "*"){
    document.write("Result of % x"  +(firstnumber * secondnumber));
}
else if(result === "%"){
    document.write("Result of % ="  +(firstnumber % secondnumber));
}
else if(result === "/"){
    document.write("Result of / ="  + (fnumber / snumber));
}
else{
    document.write(`Enter Correct sign this mention in pop-up`);
}


