import { memo, useState } from "react"
function Memoo( {naam} ) {
    const [user,setUser] = useState(naam);
    function changeChotu(){
        setUser( Math.floor(Math.random()*10) )
    }
  return (
    <div>
        <Chotu b={user} />
        <button onClick={changeChotu} >Change Krdo</button>
        <Chotu b={10} />
        <Chotu b={20} />
    </div>
  )
}
let Chotu = memo(function( {b} ){
    return(
        <h1> Hello from - {b} </h1>
    )
})

export default Memoo