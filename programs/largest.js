let marks=[84,94,99,89]

let largest=marks[0];

for(let i=0;i<marks.length;i++){
    if(marks[i]>largest){
        largest=marks[i];
    }
}
console.log("The largest mark is: "+largest);