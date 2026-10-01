let btnEl = document.querySelector('button')
let inpEl = document.querySelector('input')
let listEl = document.querySelector('#list')

function DomManipulation(resp){
    // console.log(resp);
    // khali karo
    while(listEl.firstChild){
        listEl.firstChild.remove()
    }
    for(let item of resp){
        // console.log(item.show.name);
        // console.log(item.show.image.medium);
        if( item.show.image ){
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src' , item.show.image.medium )        
            listEl.append(imgEl)
        }
    }
}

function ApiCalling(searchedText){
    const API = 'https://api.tvmaze.com/search/shows?q='+searchedText
    // console.log(API);
    fetch(API)
    .then((data)=>{ 
        // console.log(data);
        return data.json()
     })
    .then((resp)=>{ 
        DomManipulation(resp)
    })
    .catch((err)=>{ console.log(err) })
}

btnEl.addEventListener('click' , (event)=>{
    // console.log(event.target.innerText);
    let searchedText = inpEl.value;
    ApiCalling(searchedText)
})


