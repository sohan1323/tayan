let arr1 = ['1','2','3'];
console.log(arr1);




















//* practice qn.

// let demo = [11,34,54,76,23];
// document.write(demo,"<br>");

// demo.push(44);
// document.write(demo,"<br>");

// demo.unshift(99);
// document.write(demo,"<br>");

// let num = +prompt("enter the number")

// function find(number,arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==number){
//             document.write("element at "+(i-1),"<br>");
//             break;
//         }
        
    
//     }

    

// }

// find(num,demo);


// let number1 = [1,2,3,4,5];

// let num_sqr = number1.map(item => item*item);
// document.write(num_sqr);


////////////////////////////////////////////////////////////////////////////////

let array4 = [1,2,3,4,5,6,7,8,9,10];

let even_num = array4.filter(num => num%2==0);
document.write(even_num,"<br>");

let array5 = [34,12,56,78,23,1];
let sort_arr = array5.sort();
document.write(sort_arr,"<br>");

let numbers = [10,20,30,40,50];
let sum = numbers.reduce((acc,item)=>acc+item,0);
document.write(sum,"<br>");

let arr2 = [1,2,3,4,5,6];

function rev(arr){
    let start = 0;
    let end = arr.length-1;

    while(start<end){
        temp=arr[start];
        arr[start]=arr[end]
        arr[end]=temp;
        start++;
        end--;
    }

    return arr;
}

document.write(rev(arr2));
