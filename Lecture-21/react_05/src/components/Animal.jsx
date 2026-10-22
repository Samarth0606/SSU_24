import Samarth from "./Samarth"

function Animal( {naam,age,gender,isCarnivorous} ) {

  return (
    <section>
        <h1>Welcome ji</h1>
        <Samarth />
        <div>
            <h1>{naam}</h1>
            <h1>{age}</h1>
            <h1>{gender}</h1>
            <h1>isCarnivorous: { JSON.stringify(isCarnivorous) }</h1>
        </div>
    </section>
  )
}

export default Animal

// -----------------------------------------

// function Animal( propsssssss ) {

//     console.log(propsssssss);

//   return (
//     <div>
//         <h1>{propsssssss.naam}</h1>
//         <h1>{propsssssss.age}</h1>
//         <h2>{5*5*5}</h2>
//     </div>
//   )
// }

// export default Animal