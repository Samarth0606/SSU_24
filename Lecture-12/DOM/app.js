// selection
// let heading1 = document.getElementsByTagName('h1')
// console.log(heading1);


// manipualtion

// heading1[0].style.color = "red"
// heading1[1].style.color = "blue"

// -------------------------------------

// selection
// let sam = document.getElementById('sam')
// console.log(sam);

// manipualtion
// sam.style.border = "2px solid black";
// sam.style.fontFamily = "cursive";

// -------------------------------------

let vohra = document.getElementsByClassName('vohra');
console.log(vohra);

// vohra[0].style.color = "red";
// vohra[1].style.color = "green";

// for(let item of vohra){
//     item.style.color = "red"
//     item.style.border = "2px solid black"
// }

for(let item of vohra){
    item.style.cssText = `
        color:red;
        border: 20px solid blue
    `
}