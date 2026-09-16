// console.log(axios);
const API = "https://api.tvmaze.com/search/shows?q=spiderman"

axios.get(API)
.then( (data)=>{ 
    console.log(data);
} )
.catch( (err)=>{
    console.log(err);
} )

// console.log(1);
