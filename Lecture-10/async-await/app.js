

// function sam(){

// }
// console.log(  sam() );

// function sam(){

// }
// console.log( new sam() );


// async function sam(){

// }
// console.log( sam() );


// async function sam(){
//     return 100
// }
// console.log( sam() );


async function sam(){
    return new Promise((resolve,reject)=>reject("bye"))
}
console.log( sam() );

