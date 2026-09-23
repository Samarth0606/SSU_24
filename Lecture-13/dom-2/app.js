
// let vohra  = document.getElementById('vohra');
// console.log(vohra);

// let classes = document.getElementsByClassName('sam')
// // console.log(classes);
// classes[0].style.border = "5px solid black";
// classes[0].style.color = "red";
// classes[1].style.border = "5px solid black";
// classes[1].style.color = "blue";

// -------------------------------------

// querySelector
// let random1 = document.querySelector('h1')
// let random2 = document.querySelector('.sam')
// let random3 = document.querySelector('#vohra')
// random1.style.color = "red"
// console.log(random1);
// console.log(random2);
// console.log(random3);

// // querySelectorAll

let random4 = document.querySelectorAll('.sam')
// console.log(random4);

// for(let item of random4){
//     item.style.color = "red";
//     item.style.backgroundColor = "green";
//     item.style.border = "2px solid black";
//     item.style.fontSize = "27px";
// }
for(let i of random4){
    i.style.cssText = `
        color:red;
        font-size:50px;
        background-color: yellow;
        border: 5px solid black;
    `
}


