// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a,b,c);
// var a = 1; //global
// let b = 2; //script
// const c = 3; //script

// if(true){
//     var d = 4; //global
//     let e = 5; //block
//     const f = 6; //block
// }
// sam();
// function sam(){
//     var g = 7; //functional + block = local
//     let h = 8; //block
//     const i = 9; //block
// } 

// // ------------------------

// console.log(a); //undefined
// var a = 10;
// console.log(a); //10

// sam()
// function sam(){
//     console.log("balle balle") //
// }


// // ------------------------

// console.log(a); //error - special error
// let a = 10;
// console.log(a); 

// sam()
// function sam(){
//     console.log("balle balle") 
// }

// // ------------------------

// console.log(a); 
// var a = 10;
// console.log(a); 
// var a = 20;

// sam()
// function sam(){
//     console.log(b);
//     var b = 30;
//     console.log(b);
// }


// ------------------------

// console.log(a); 
// var a = 10;
// console.log(a); 
// a = "sam"

// sam()
// function sam(){
//     console.log(a);
//     console.log(b);
//     let b = 30;
//     console.log(b);
// }

// ------------------------


sam()
function sam(){
    console.log(b);
    var b = 10;
    let c = 20
    maverick()
    vohra();
    function vohra(){
        console.log(c);
        var c = 30
        var d = 100;
    }
    function maverick(){
        console.log(d);
        var d = 20;
    }
    console.log(d)
}



