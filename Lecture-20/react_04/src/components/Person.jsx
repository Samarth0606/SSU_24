

function Person( {naam,umar,rang,gender} ) {
    // console.log(props); //object
    
    // let naam = "Samarth";
    // let umar = 26;
    // let color = "Blue";
    // let gender = true;

  return (
    <div style={{color:"red", width:"300px", border:"2px solid black"}}>
        <h1>Name: {naam}  </h1>
        <h1>Age: {umar} </h1>
        <h1>favColor: {rang} </h1>
        <h1>IsMale: { JSON.stringify(gender) }</h1>
    </div>
  )
}

export default Person

