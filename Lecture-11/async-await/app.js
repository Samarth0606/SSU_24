

// const API = "https://jsonplaceholder.typicode.com/todos"

// fetch(API)
// .then((data)=>{
//     // console.log(data);partial / meta data
//     return data.json()
// })
// .then((resp)=>{
//     console.log(resp);
// })
// .catch((err)=>{
//     console.log(err);
// })


// async await


// async function calling(){
//     const API = "https://jsonplaceholder.typicode.com/todos"
//     let data = await fetch(API) //return promise
//     let resp = await data.json() //promise
//     console.log(resp);   
// }

// calling();


async function calling(){
    const API = "https://jsonplaceholder.typicode.com/todos"
    let data = await axios.get(API) //return promise
    // let resp = await data.json() //promise
    console.log(data);   
}

calling();


