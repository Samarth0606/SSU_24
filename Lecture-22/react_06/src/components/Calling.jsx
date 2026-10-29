// import { useEffect, useState } from "react"
// import axios from 'axios';

// function Calling() {
//     let [api,setApi] = useState([]);
    
//     useEffect(()=>{
//         const API = "https://jsonplaceholder.typicode.com/posts"
//         axios.get(API)
//         .then((data)=>{
//             console.log(data.data);
//             setApi(data.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     } , [])
        
//   return (
//     <div>Calling</div>
//   )
// }

// export default Calling


// -------------------------------------

// import { useEffect, useState } from "react"
// function Calling() {
//     let [api,setApi] = useState([]);
//     useEffect(()=>{
//         const API = "https://jsonplaceholder.typicode.com/posts"
//         fetch(API)
//         .then((data)=>{
//             return data.json()
//         } )
//         .then((resp)=>{
//             console.log(resp) 
//             setApi(resp)  
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     } , [])
//   return (
//     <div>Calling</div>
//   )
// }

// export default Calling