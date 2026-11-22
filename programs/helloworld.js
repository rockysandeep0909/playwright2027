// Namaskara
console.log("Namaskara World");

/* hello world program in javascript 
   namaskara means hello in kannada language

*/
console.log("Hope sessions are going good");

// variable declaration in javascript
let name="sandeep";
let age=25;
let isMarried=false;
let hobbies=["cricket","reading","coding"];
let nextbatch;
let studentgotplaced;
let abc =null;
age=age+1;
console.log(age);

// relational operators < , >, <=, >=, ==, !=

a=10;
b=20;
console.log(a>b);
console.log(a<b);

let marks=85;

// if(marks>=70){
//  console.log("Student has got distinction");
//  console.log("Student is eligible for placement");
// }
   

// else
//     console.log("Student has not got distinction");

// nested if else

if(marks>=70){
    console.log("Student has got distinction");
    console.log("Student is eligible for placement");
}

else if(marks>=60 && marks<70){
    console.log("Student has got first class");
    console.log("Student is eligible for placement A");
}
else if(marks>=50 && marks<60){
    console.log("Student has got second class");
    console.log("Student is eligible for placement B");
}
else if(marks>=35 && marks<50){
    console.log("Student has got pass class");
    console.log("Student is eligible for placement C");
}
else{
    console.log("Student has failed");
    console.log("Student is not eligible for placement");
}

let haslicense=true;
if(haslicense){
    console.log("Student can drive");
}
else{
    console.log("Student cannot drive");
}

//arithmetic operators +, -, *, /, %

let x=10;
let y=3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

// even or odd number 
let number=11;

if(number%2==0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}

// while loop

let s=1;
while(s<=5){
    console.log(s);
    s=s+1;  //s++
}
// find the even and odd number between 20 and 80 using for loop
for(let i=20;i<=80;i++){
    if(i%2==0){
        console.log(i+" is even number");
    }
    else{
        console.log(i+" is odd number");
    }
}