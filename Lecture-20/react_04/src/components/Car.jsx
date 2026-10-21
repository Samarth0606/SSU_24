
function Car( {color,model,isPetrol} ) {
  return (
    <div style={{border:"2px solid black",backgroundColor:"yellow"}} >
        <h1>Color: {color} </h1>
        <h1>Model: {model} </h1>
        <h1>Petrol:{ JSON.stringify(isPetrol)} </h1>
    </div>
  )
}

export default Car