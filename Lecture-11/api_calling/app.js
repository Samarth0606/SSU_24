// setInterval()
// setTimeout()
// console.log()

// api
// const API = "https://jsonplaceholder.typicode.com/todos"

// fetch(API)
// .then( (data)=>{
//     // console.log(data , "then"); //meta data
//     return data.json() //waits for entire data
// } )
// .then( (resp)=>{
//     console.log(resp , "sam");
// } )
// .catch( (err)=>{
//         console.log(err , "catch");
// } )

// console.log(1);


// ---------------------------
const API = "https://api.tvmaze.com/search/shows?q=superman"

fetch(API) //RETURN PROMISE
.then( (data)=>{
    // console.log(data , "then");
    return data.json() //returns promise
} )
.then( (resp)=>{
    console.log(resp , "response"); 
} )
.catch( (err)=>{
    console.log(err , "catch");
} )

// console.log(1 , 2 , 3 , 4 , 5 );


