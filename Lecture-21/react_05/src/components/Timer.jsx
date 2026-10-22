import { useEffect, useState } from "react"

function Timer() {

    const [time,setTime] = useState(0)

    //only run once
    useEffect(()=>{
        let id = setInterval(()=>{
            setTime(time+1)
        } , 1000)

        return ()=>clearInterval(id) //cleanup fn
    } , [time]) //dependancy array

  return (

    <div>
        <h2>helnfkjwe</h2>
        
        Timer: {time}</div>
  )

}

export default Timer