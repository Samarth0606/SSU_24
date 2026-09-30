let ele = document.querySelector('#sam');
console.log(ele);
console.log(ele.parentElement);
console.log(ele.parentElement.parentElement);
console.log(ele.parentElement.parentElement.nextElementSibling);
console.log(ele.parentElement.parentElement.nextElementSibling.children);
console.log(ele.parentElement.parentElement.nextElementSibling.children[0].children);
console.log(ele.parentElement.parentElement.nextElementSibling.children[0].children[0].children);
console.log(ele.parentElement.parentElement.nextElementSibling.children[0].children[0].children[0]);
ele.parentElement.parentElement.nextElementSibling.children[0].children[0].children[0].style.color = "red"