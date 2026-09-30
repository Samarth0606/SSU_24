
let inpEl = document.querySelector('input')

// inpEl.addEventListener('input' , ()=>{})
// inpEl.addEventListener('input' , function(event){
//     console.log(event);
//     // console.log(event.target);
//     console.log(event.target.value);
//     console.log(event.data);
// })

// ----------------------------------


inpEl.addEventListener('keydown' , (e)=>{
    console.log(e);
    
    if(e.which === 13){
        console.log(e.target.value);
    }
})

