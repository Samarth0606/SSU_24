import Car from "./components/Car";
import Counter from "./components/Counter";
import Logout from "./components/Logout";
import Person from "./components/Person";

function App(){
  return(
    <div>
      <h1>Welcome to App</h1>

      <Counter />
      {/* <Logout usernaam="Sam" /> */}

      {/* <Car color="red"  model={2025}  isPetrol={true} />
      <Car color="blue" model={2026}  isPetrol={false}  /> */}

      {/* <Person naam="Samarth" umar={26} rang="Blue" gender={true}  />
      <Person naam="Maverick" umar={4} rang="Brown" gender={true} />
      <Person naam="Yuvraj" umar={21} rang="White" gender={true} /> */}
    
    </div>
  )
}

export default App;