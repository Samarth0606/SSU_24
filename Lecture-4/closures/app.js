
function outer(){
    let a = 10;
    let b = 20;

    return function inner(){
        console.log(b);
    }
    // return inner
}
let returnedVal = outer();
returnedVal();






