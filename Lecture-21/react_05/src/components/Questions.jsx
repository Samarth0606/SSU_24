import { useState } from "react"

function Questions() {

    const [count,setCount] = useState(0); //initial state
    const [user,setUser] = useState("sam");
    function handleInc(){
        setCount( (count)=>count+6 ) //6
        setCount( count+2 ) //2
        setCount( (count)=>count+5 ) // 7
        setUser("Anonymous")
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleInc} >Inc+</button>
    </div>
  )
}

export default Questions