import React, { useEffect, useState } from 'react'

function Api() {
    const [apii,setApii] = useState([]);
    useEffect(()=>{
        let API = "https://jsonplaceholder.typicode.com/posts"
        async function calling(){
            let dataa = await fetch(API);
            let resp = await dataa.json();
            console.log(resp);
            
        }
        calling()
    } , [])

  return (
    <div>Api</div>
  )
}

export default Api