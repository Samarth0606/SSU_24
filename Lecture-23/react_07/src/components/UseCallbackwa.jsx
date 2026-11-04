import { memo, useCallback, useState } from "react"

function UseCallbackwa() {
    const [count,setCount] = useState(0);
    // let b = "sam"
    let b = useCallback(function(){ console.log("hi") } , [])
    function handleChange(){
        setCount(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <Chotu dataa={b} />
        <button onClick={handleChange}>Change Data</button>
        <Chotu dataa="Maverick" />
        <Chotu dataa="Simba" />
        <button onClick={()=>setCount(count+1)} >Inc - {count}</button>
    </div>
  )
}

let Chotu = memo(function({dataa}){
    return(
        <h1>Hiii... {dataa} </h1>
    )
})

export default UseCallbackwa