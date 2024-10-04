
import './App.css'
import { useState,useEffect,useRef } from 'react';
function App() {
 
  // const [count, setCount] = useState(0);

  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncrement(){
  //   val.current = val.current + 1
  //   console.log("Value of val:", val.current);
  //   setCount(count + 1);
  // }

  // function changeColor(){
  //  btnRef.current.style.backgroundColor = "red";
  // }

  // useEffect(() => {
  //   console.log("main fir se render ho gaya hu")
  // })
  

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){
  timerRef.current = setInterval(() => {
    setTime(time =>time+1)
  },1000);
  }
  function stopTimer(){
  clearInterval(timerRef.current);
  timerRef.current = null;
  }
  function resetTimer(){
  stopTimer();
  setTime(0);
  }


  return (
   <div>
    
    <h1>StopWatch: {time} seconds</h1>
    <button onClick={startTimer}>
      Start
    </button>
     <br /> <br />

     <button onClick={stopTimer}>
     Stop
     </button>
     <br /> <br />

     <button onClick={resetTimer}>
      Reset
     </button>

  






    {/* <button 
    ref={btnRef}
    onClick={handleIncrement}
    style={{ border: '1px solid blue', padding: '10px', cursor: 'pointer' }}>
      Increment
    </button>
    <br />
    <br />


     <button onClick={changeColor}
     style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }}>
      Change color of 1st Button 
     </button>

     <br />
     <br />
    <div>
      Count:{count}
    </div>*/}
    </div> 
  )
}

export default App
