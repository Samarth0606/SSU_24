import React, { useEffect, useState } from 'react'

function Timer() {

    const [time , setTime] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time+1)
        } , 1000)
    } , [time])

  return (
    <div>Timer: {time}</div>
  )
}

export default Timer