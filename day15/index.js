for(let i=0;i<=10;i++){
    if(i==5){
        break;
    }
    document.write(i,"<br>");
}

document.write("<br><br>")

for(let i=0;i<=10;i++){
    if(i==5){
        continue;
    }
    document.write(i,"<br>");
}

function Hii(){
    document.write("hii user");
}

Hii();

document.write("\n");

// let num1 = +prompt("enter the 1st number");
// let num2 = +prompt("enter the second number");

// function sum(n1,n2){
//     return n1+n2;
// }

// document.write(sum(num1,num2));

// function sum(){
//     let num1 = 30;
//     let num2 = 15;
//     document.write(num1+num2);
// }

// sum();



let num1 = +prompt("enter 1st number");
let num2 = +prompt("enter 2nd number");
let num3 = +prompt("enter 3rd number");

function multi(a,b,c){
    return a*b*c;
}

document.write(multi(num1,num2,num3));