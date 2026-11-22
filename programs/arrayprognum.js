let sandeepmarks=[84,98,94,84]
// let num=25;
// let canDrive=true;


// console.log(sandeepmarks)
console.log(sandeepmarks.length)
// console.log(typeof(sandeepmarks))
// console.log(typeof(num));
// console.log(typeof(canDrive))


// console.log(sandeepmarks[3]);


sandeepmarks.push(69)
sandeepmarks.push(70)

console.log(sandeepmarks.length)

for(let i=0;i<sandeepmarks.length;i++){
   console.log(sandeepmarks[i]); 
}

sandeepmarks.pop();
sandeepmarks.pop();
console.log(sandeepmarks.length)

for(let i=0;i<sandeepmarks.length;i++){
   console.log(sandeepmarks[i]); 
}

sandeepmarks.unshift(100);

for(let i=0;i<sandeepmarks.length;i++){
   console.log(sandeepmarks[i]); 
}