
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount]=useState(0);
  const [total, setTotal]=useState(1);
 
//variation:1
  //run on every render
  // useEffect(() => {
  //  alert(" I will run each render")
  // })
  

  //variation:2
//that runs on only first render

// useEffect(()=>{
//   alert("I will run only once");
// },[])


//variation:3
// useEffect(()=>{
// alert('I will run every time when count is updated')
// },[count])


//variation:4
// multiple dependencies

// useEffect(()=>{
//   alert('I will run every time when count/total is updated')
// },[count ,total])

// variation:5
// cleanup function added

// useEffect(() => {
  
// alert("Count is updated")
//   return () => {
//     alert("count is unmounted from UI")
//   }
// }, [count])


  function handleClick(){
    setCount(count + 1);
    
  }


  function handleClickTotal(){
    setTotal(total+1);
  }
  return (
   <div>
    <button onClick={handleClick}>
    Update Count
    </button>
    <br />
    Count is: {count}
<br />
    <button onClick={handleClickTotal}>
    Update total
    </button>
    <br />
    total is: {total}
   </div>
  )
}

export default App
