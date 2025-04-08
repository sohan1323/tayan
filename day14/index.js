
// //* take numbers as input from user also take operation to perform and display result

// let num1 = Number(prompt("enter the 1st number"));
// let num2 = Number(prompt("enter 2nd number"));
// let sym = prompt("enter the operation + - * / %");

// switch(sym){
//     case '+':
//         document.write(num1+num2);
//         break;

//     case '-':
//         document.write(num1-num2);
//         break;

//     case '*':
//         document.write(num1*num2);
//         break;

//     case '/':
//         document.write(num1/num2);
//         break;

//     case '%':
//         document.write(num1%num2);
//         break;

//     default:
//         document.write("cant perform operation");
// }


// /////////////////////////////////////////////////////////

// //* check for voting age

// let age = Number(prompt("enter your age"));

// if(age>=18){
//     document.write("you can vote");
// }
// else if(age<18){
//     document.write("not eligible for voting")
// }
// else{
//     document.write("enter valid age");
// }


// //////////////////////////////////////////////////////////////////////////
// //* sum of first 10 natural numbers

// let cnt = 0;
// for(let i=1;i<=10;i++){
//     cnt+=i;
// }
// document.write("sum is "+cnt);

// //////////////////////////////////////////////////////////////
// //* factorial of input number

// let num = Number(prompt("enter number"));
// let fact=1;
// for(let i=num;i!=0;i--){
//     fact*=i;

// }
// console.log(fact);

// ////////////////////////////////////
// //* print hii 10 times

// let i=0;
// while(i<10){
//     document.write("hii"+"<br>");
//     i++;
// }

// //* table of two

// let i = 1;
// while(i<=10){
//     document.write(i*2,"<br>");
//     i++;
// }

// //* factorial of 5

// let num = 5;
// let fact=1;
// while(num){
//     fact*=num;
//     num--;
// }
// document.write("factorial is",fact);

// //* addition upto input number

// let num = Number(prompt("enter the number"));
// let num2 = Number(prompt("enter the number"));
// let cnt = 0;
// let cnt2 = 0;
// while(num){
//     cnt+=num;
//     num--;
// }

// do{
//     cnt2+=num2;
//     num2--;
// }while(num2);
// document.write(cnt2,"<br>");
// document.write(cnt);


// //* 1 to 20 even numbers

// let i = 0;
// while (i <= 20) {
//     if (i % 2 == 0) {
//         document.write(i, "<br>")
//     }
//     i++;
// }

// //* 1 to 10 reverse number

// let j=10;
// while(j){
//     document.write(j,"<br>");
//     j--;
// }


// //* ask number as input if positive ok if negative again ask for input

// let rpt = true;
// let num; 
// while(rpt){
//     num=Number(prompt("enter the number"));
//     if(num>0){
//         rpt=false;
//     }
//     else{
//         rpt=true;
//     }
// }