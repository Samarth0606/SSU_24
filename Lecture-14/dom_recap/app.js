// selection - 5

// let selectedItem = document.getElementById('sam');
// console.log(selectedItem);


// manipulation

// wet - write everything twice
// selectedItem.style.color = "red"
// selectedItem.style.backgroundColor = "yellow"
// selectedItem.style.fontSize = "60px"

// dry
// selectedItem.style.cssText = `
//     color: red;
//     background-color: yellow;
//     font-size: 60px;
//     border: 2px dashed purple;
// `

// -----------------------------------------------
// let classesSelect = document.getElementsByClassName('vohra')
// console.log(classesSelect);

// wet
// classesSelect[0].style.color = "red"
// classesSelect[1].style.color = "red"
// classesSelect[2].style.color = "red"

// dry
// for(let item of classesSelect){
//     item.style.color = "yellow"
// }


// -----------------------------------------------
// querySelector - first occurance

// let ids1 = document.querySelector('h1')
// let ids2 = document.querySelector('.vohra')
// let ids3 = document.querySelector('#sam')

// console.log(ids1);
// console.log(ids2);
// console.log(ids3);

// querySelectorAll - multiple occurance
// let ids1 = document.querySelectorAll('h1')
// let ids2 = document.querySelectorAll('.vohra')
// let ids3 = document.querySelectorAll('#sam')

// console.log(ids1);
// console.log(ids2);
// console.log(ids3);