import { useMemo, useState } from "react"

function UseMemoo() {
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    function handleInp(e){
        setInp(e.target.value)
    }
    let out = useMemo(()=>{
        let sum = 0;
        for(let i=1; i<=inp; i++){
            console.log("loop ran");
            sum+=i;
        }
        return sum
    }, [inp])

  return (
    <div>
        <button onClick={ ()=>setCount(count+1) } >Count - {count}</button>
        <h1>Sum: {out} </h1>
        <input onChange={handleInp} type="number" value={inp} />
    </div>
  )
}

export default UseMemoo




// ------------------------------------------



// import { useState } from "react"

// function UseMemoo() {

//     const [count,setCount] = useState(0);
//     function Inc(){
//         setCount(count+1)
//     }

//   return (
//     <div>
//         <button onClick={Inc} >Count - {count}</button>
//     </div>
//   )
// }

// export default UseMemoo