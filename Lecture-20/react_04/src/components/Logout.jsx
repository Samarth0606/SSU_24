// import { useState } from "react";


// function Logout( {usernaam} ) {
//     // console.log(usernaam);
//     // let user = usernaam;

//     let [user,setUser] = useState(usernaam)

//     function change(){
//         setUser("ANONYMOUS")
//     }
    
//   return (
//     <div>
//         {/* <h1> {usernaam} </h1> */}
//         <button onClick={change} >Logout!!</button>
//         <h1> {user} </h1>
//     </div>
//   )
// }

// export default Logout

// ------------------------------

import { useState } from "react"


function Logout( {usernaam} ) {
    // console.log(usernaam);
    let [user,setUser] = useState(usernaam); 
    function handleLogout(){
        setUser("Anonymous");
    }

  return (
    <div>
        <h1> {user}</h1>
        <button onClick={handleLogout} >Logout!!</button>
    </div>
  )
}

export default Logout


