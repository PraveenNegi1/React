
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


//step1: create context

//step2:wrap all the child inside a provider
//step3: value pass
//step:4 consumer ke pass ja ke value consume kr lo
//const UserContext = createContext();
 const ThemeContext = createContext();

function App() {
  
//const [user, setUser] =useState({name:"Praveen negi"})

const [theme, setTheme] = useState("light")
  return (

    <ThemeContext.Provider value ={{theme,setTheme}}> 
    <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
    <ChildA/>
    </div>
    
     </ThemeContext.Provider>



    // <>

    // <UserContext.Provider value ={user}> 
    //   <ChildA />
    // </UserContext.Provider>

    // </>
  )
}

export default App
//export{UserContext}
export {ThemeContext}
