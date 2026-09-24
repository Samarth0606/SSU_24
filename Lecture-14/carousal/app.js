// selection
let imgEl = document.querySelector('img')
console.log(imgEl);

// manipulation

let arr = [
    "https://images.unsplash.com/photo-1789758489682-bc9bca58ecb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1789722582311-a9aa3120bb76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1779974183733-400d98f22e20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1789731717214-2308ec5d0e17?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
]
let x = arr.length;
let round = 4;
let i = 0;
let idd = setInterval( ()=>{
    imgEl.setAttribute('src' , arr[i])
    i = (i+1) % arr.length;
} , 2000 )
let finall = x*round*2000 //32000

setTimeout(()=>{
    clearInterval(idd)
} , 32000)