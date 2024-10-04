import { useState } from 'react';
import './App.css'
import Logoutbtn from './components/Logoutbtn'
import Loginbtn from './components/Loginbtn';






function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
    <div>
      { isLoggedIn ? <Logoutbtn /> : <Loginbtn/>}
    </div>
  )

// if (isLoggedIn){
//   return(
//     <Logoutbtn/>
//   )
// }
// else{
//   return(
//     <Loginbtn/>
//   )
// }
  
}

export default App
