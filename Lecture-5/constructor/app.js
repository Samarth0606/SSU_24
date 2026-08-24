// function Sam(){
//     this.naam = "Sam";
//     this.umar = 99;
//     this.greet = function(){
//         console.log("namaste ji");
//     }
// }
// // let x = sam(); // normal fn //undeifned
// // console.log(x);

// let y = new Sam();
// console.log(y);

// -------------------------------------
function Sam(userName , userAge){
    this.naam = userName;
    this.umar = userAge;
    // this.greet = function(){
    //     console.log("namaste ji");
    // }
}
Sam.prototype.greet =   function(){
                            console.log("namaste ji");
                        }

let x = new Sam("Sam" , 99 );
let y = new Sam("Mav" , 4);
let z = new Sam("Tom" , 12);
console.log(x);
console.log(y);
console.log(z);
