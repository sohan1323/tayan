
// //* program to print current month

// switch(new Date().getMonth()){
//     case 0:document.write("january");
//     break;
//     case 1:document.write("february");
//     break;
//     case 2:document.write("march");
//     break;
//     case 3:document.write("april");
//     break;
//     case 4:document.write("may");
//     break;
//     case 5:document.write("june");
//     break;
//     case 6:document.write("july");
//     break;
//     case 7:document.write("august");
//     break;
//     case 8:document.write("september");
//     break;
//     case 9:document.write("october");
//     break;
//     case 10:document.write("november");
//     break;
//     case 11:document.write("december");
//     break;
//     default:document.write("error");
// }


// //* program to check chracter is capital or small

// let chr = prompt("enter the character");

// if(chr>='A'&&chr<='Z'){
//     document.write("capital");
// }
// else if(chr>='a'&&chr<='z'){
//     document.write("small");
// }
// else{
//     document.write("enter character pls");
// }


// //* to check capital or small (using switch case)

// let chr = prompt("enter the character");

// let a = chr>='A'&&chr<='Z';
// let b = chr>='a'&&chr<='z';

// switch(a||b){
//     case a:
//         document.write("capital");
//         break;

//     case b:
//         document.write("small");
//         break;

//     default:
//         document.write("enter character pls");
// }


// //* program for student grade and result

// let grd = prompt("enter the student grade A,B,C,D");

// switch(grd){
//     case 'A':
//     case 'a':document.write("excellent");
//     break;
//     case 'B':
//     case 'b':document.write("good");
//     break;
//     case 'C':
//     case 'c':document.write("average");
//     break;
//     case 'D':
//     case 'd':document.write("below average");
//     break;
//     default:document.write("fail");
// }


// //* table of two

// for(let i=1;i<=10;i++){
//     console.log(2*i);
//     console.log();
// }


// //* print hello student 20 times

// for(i=1;i<=20;i++){
//     console.log("hello student ");
// }


// //* 1 to 10 in reverse order

// for(let i=10;i>=1;i--){
//     console.log(i);
// }


// //* traffic signal

// let clr = prompt("what is color of signal");

// switch(clr){
//     case "Red":
//     case "red":document.write("stop");
//     break;
//     case "Yellow":
//     case "yellow":document.write("Be Ready");
//     break;
//     case "Green":
//     case "green":document.write("Go");
//     break;
//     default:document.write("no signal");
// }


// //*print fruits

// let fruits = ["apple","banana","grapes","mango","guava"];

// for(let i=0;i<fruits.length;i++){
//     document.write(fruits[i],"<br>");
// }

// //92 84 12 72 12 tayan