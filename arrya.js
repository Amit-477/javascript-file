// let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = 0;

// for (let i = 2; i < Number.length; i++) { 
//     result += Number[i];
// }

// console.log(result);

// const product = {
//     title: "Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270
// };

// console.log(product);
 
// Arithmetic operators//

// let a= 5;
// let b=2;

// console.log("a + b=", a + b);
// console.log("a - b=", a - b );
// console.log("a * b=", a * b );
// console.log("a / b=", a / b );
// console.log("a % b=", a % b );
// console.log("a ** b=", a ** b );

// Unary Operator //

// let a= 5;
// let b=2;

// console.log("a = ", a ,  " & b = ", b );

// // a++;
// // b++;
// // console.log("a = ", a ,  " & b = ", b  );

// console.log("--a =" , --a);
// console.log("a =", a );


// let a= 5; 
// let b=5;

// console.log("cond1 == 0cond2 ", cond1 == cod2);

// alert("Hello");

// ("");

// 





// let year = prompt('Enter a year:');

// if ((1 == num)) {
//     console.log(year + ' is a leap year');
// } else {
//     console.log(year + ' is not a leap year');
// }

// } 
// take input

// let num = prompt("num");

// let a = 10;
// let b = 5;

// console.log(num);
// if(num ==1)
// {
//     console.log(a+b);
// }

// let num = prompt("num")

// if (num%2==0){
//  console.log(`is an even number`);
// }
// else{
//     console.log(`is an odd number`);
    
// }

// let num = prompt("num");

// if (num%3==0 && num%5==0) {
//     console.log(`is a fizzbuzz`);
// }
// else if (num%3==0) {
//     console.log(`is a buzz`); 
// }
// else if (num%5==0) {
//     console.log(`is a fizz`);
    
// }
// else{
//     console.log(`is a unfizz`);
    
// }

// for loop

// result=0;
// for(i=0; i<=100;){
//     result=result+i;
//     i=i+1;
// }
// console.log(result);

// let a =[1,2,3,4,5,6,7,8,9]

// for(let i= 2; i < a.length; i++){
//     console.log(a[i]);
// }
 
// for (let i = 1; i <=5; i++) {
//     console.log( "i  = " , i);
// }
//   console.log(i);


// let ruselt=10
// for( i= 0; i<=10;i++){
   
//     ruselt=ruselt+i;
// }
// console.log(ruselt);
  //while loop


//    let sum = 0;

//    while (sum<=5) {
//     console.log(" sum = ", sum);
//     sum=+sum; sum++;
    
//    }  

// let sum=0;
// for (let i=2; i<=10; i=i+2){
//     sum=sum+i
// } 
// console.log(sum);

// do-while-loop

// let i=1;
// do{
//     console.log("Bhola");
//     i++;
// }while(i<=10);

// let i = 1;
// do{
//     console.log("i=", i);
//     i++;
// }while (i<=5);

// for-of-loop

// let str ="Javascript";
// let size= 0;

// for(let i of str){
//   console.log("i= ",i);
//   size++;
// }
// console.log("string size",size);

// for in loop

// let student ={
//  name:"Bhola",
//  age:20 ,
//  cgpa:3.49,
//  ispass:true
// };

// for( let i in student ){

//   console.log(i,student[i]);

// } 

// practice Qs-1

//print all number from 0 to 100.

// for (let num=1; num <=100; num++){
//   console.log(num);
// }

// print all even number from 0 to 100.

// for( let num=1; num<=100; num++){
//    if (num%2==0){
//     console.log(num);
//    }
// }


// practice Qs-2

// let GameNum=25;

// let userNum = prompt("Guess the Game Number");

// while(userNum != GameNum){
//   userNum=prompt("You enter worng number. Guess aging:");
// }
// console.log( "Congratulation,You Entered the right Number");


// // string in js

// let str="Bangladesh";

// console.log(str[0]);


    // Arrays-js

    // let hero =[A, B, C, D];

    // let Marks=[10, 20, 30,40];

    // let info=[A, 10, Bhola];

    // console.log();
    

// Looping over an Array

// let Names = ["A","B","C"]

// for loop

// for( let i=0; i<Name.length; i++){
//   console.log(Name[i]);
// }

// For of loop

// for( let Name of Names){
//   console.log(Name);
// }


                               // Function & Method

//  function sum(x , y) {
 
//   s = x + y ;
//   console.log("before return");
//   return s;
 
//  }              
 
//  let val = sum(3,4);
//  console.log(val);
 
// sum function 

// function sum(a,b){
//   return a+b;
// }
// // arrow function
// const arrowsum = (a,b) => {
//   console.log(a+b);
  
// }

//multiplcation  function


// function mul(a,b) {
//  return a*b;  

// }
//arrow function
// const arrowsmul = (a,b) => {
//   console.log(a*b);
// } 

// Foreach loop (callBack function)

// let Nums =[ 1, 2, 3, 4, 5, 6, 7];
//  Nums.forEach ((num)=>{
//    console.log(num*num);
   
//  });

// Map arry

// let nums=[1, 2, 3, 4, 5, 6];

// let newArr =nums.map((val) =>{
//   return val*2
// });
// console.log(newArr);

// let calcSqare = num => {
//   console.log(num*num);
  
// };

// Filter array method

// let arr =[1, 2, 3, 4, 5, 6];

// let evenArr = arr.filter ((val) => {
//   return val >3 ;
// })

// console.log(evenArr);

// Reduce Array AMethod 

// let num =[ 1, 2, 3, 4,];

// const output = num.reduce((prev , cunn) => {
//   return prev + cunn;
 
// });
// console.log(output);

// Practice

// let mark = [99, 98, 8, 77, 94, 36];

// let Topper = mark.filter((val)=>{
//   return val>90;
// })

// console.log(Topper);


// let n= prompt(" enter a number:");

// let arr=[];

// for( let i=1; i<=n; i++){
//   arr [i-1]=i;
// }
// console.log(arr);

// let sum= arr.reduce((res,curr)=>{
//   return res+curr;
// })

// console.log(sum);

// let factorial= arr.reduce((res,curr)=>{
//   return res*curr;
// })

// console.log(factorial);

// Dom Manipulation

let newBtn = document.createElement("button");
newBtn.innerText="click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor ="red";

document.querySelector("body").prepend(newBtn);

//Q2

let para = document.querySelector("p") 

para.classList.add("newclass");

