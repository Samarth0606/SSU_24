import { useState } from "react"

function Samarth() {
    
    let [count,setCount] = useState(100)

    function handleClick(){
        setCount(count+2)
    }
  return (
    <div>
        <button onClick={handleClick} >increase me!!</button>
        <h1>VALUE: {count} </h1>
    </div>
  )
}

export default Samarth