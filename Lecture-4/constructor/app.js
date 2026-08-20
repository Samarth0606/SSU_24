

// function sam(){

// }

// let ret = sam();
// console.log(ret); //undefined

// ---------------------

// let obj = {
//     naam: 'sam',
//     age: 12
// }
// ----------
// function sam(){

// }
// let ret = new sam();
// console.log(ret); // {}

// // ----------


// function sam(){
//     this.naam = "Sam";
//     this.umar = 12;
//     this.favRang = "blue";
//     this.isMale= true;
//     this.fn = function(){ console.log("bro hai tu") }
// }

// let ret = new sam();
// console.log(ret); 

// ----------


function Sam(myName , myAge, myColor, myGender){
    this.naam = myName;
    this.umar = myAge;
    this.favRang = myColor;
    this.isMale= myGender;
    this.fn = function(){ console.log("bro hai tu") }
}

let ret = new Sam("Sam" , 12 , "blue" , true);
let ret2 = new Sam("Mav" , 4 , "brown" , true);
let ret3 = new Sam("Rocky" , 2 , "black" , false);
console.log(ret); 
console.log(ret2); 
console.log(ret3); 





