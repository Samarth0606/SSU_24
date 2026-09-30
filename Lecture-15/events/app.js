


// let h1 = document.querySelector('h1')

// // function doSomething(){
// //     console.log("balle balle h1");
// // }

// // h1.onclick = doSomething;

// h1.onclick = function doSomething(){
//     console.log("balle balle h1");
// };

// -----------------------------


// let h1 = document.querySelector('h1')

// function icecream(){
//     console.log("icecream");
// }
// function momos(){
//     console.log("momos");
// }
// function biryani(){
//     console.log("biryani");
// }

// h1.onclick = biryani;
// h1.onclick = momos;
// h1.onclick = icecream;

// -----------------------------
// addEventListener

let h1 = document.querySelector('h1')

function icecream(){
    console.log("icecream");
}
function momos(){
    console.log("momos");
}
function biryani(){
    console.log("biryani");
}

h1.addEventListener('click' , biryani)
h1.addEventListener('click' , momos)
h1.addEventListener('click' , icecream)
