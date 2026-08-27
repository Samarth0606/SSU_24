// direct fn type
// how it is called upon

// function sam(){
//     console.log(this); // window object
// }
// sam(); //direct calling


// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); // obj
//     }
// }
// obj.fn() //object calling



// let obj2 = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log(this , "1"); //obj
//         function sam(){
//             console.log(this , "2"); //window
//         }
//         sam()
//     }
// }
// obj2.fn()


// let obj = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log(this , "1"); //
//         function sam(){
//             console.log(this , "2"); //
//         }
//         sam()
//     }
// }
// let abc = obj.fn;
// abc()



// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1");
//         function sam(){
//             console.log(this , "2");
//         }
//         sam()
//         let vohra = function(){
//             console.log(this , "3");
//         }
//         vohra(); 
//     }
// }
// obj.fn()


// function Sam(){
//     this.age = 23;
// }
// let s1 = new Sam();
// let s2 = new Sam();



// 5. arrow fn

// function sum(a , b){
//     return a+b
// }
// console.log( sum(10,23) );

//way-1
// const sum = (a , b)=>{
//     return a+b
// }
// console.log( sum(10,23) );

// way-2
// const sum = (a , b)=> a+b

// console.log( sum(10,23) );


// function sqaure(a){
//     return a*a
// }
// console.log(sqaure(5));


// const sqaure = (a)=>{
//     return a*a
// }
// console.log(sqaure(5));

// const sqaure = (a)=> a*a
// console.log(sqaure(5));


// way-3
const sqaure = a => a*a
console.log(sqaure(5));