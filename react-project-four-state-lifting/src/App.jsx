import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [name, setName] = useState("");

  return (

   <div>
     <Card name={name} setName={setName}/>
     <p>I am inside Parent component and value of name is :{name}</p>
   </div>
  )
}

export default App
