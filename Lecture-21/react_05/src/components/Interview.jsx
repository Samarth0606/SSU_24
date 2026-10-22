import { useState } from "react"

function Interview() {

    const [count,setCount] = useState(0);
    function handleInc(){
        // setCount(count+1)
        // setCount(count+1)
        setCount( (count)=>count+1 )
        setCount( (count)=>count+1 )
        setCount( (count)=>count+1 )
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleInc} >Inc+</button>
    </div>
  )
}

export default Interview