
// selection
let ULEL = document.querySelector('ul');


// create
let listItem =document.createElement('li')
let listItem2 =document.createElement('li')

// console.log(listItem);
listItem.innerText = "GO TO SHOPPING"
listItem2.innerText = "GO TO MANALI"
// console.log(listItem);

// ULEL.appendChild(listItem , listItem2)
ULEL.prepend(listItem , listItem2)
ULEL.append(listItem , listItem2)
// ULEL.appendChild(listItem2)


// console.log(ULEL.children);
let thirdEl = ULEL.children[2];
console.log(thirdEl);
// thirdEl.remove()

// ----------------

ULEL.removeChild(thirdEl)
