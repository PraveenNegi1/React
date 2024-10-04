
import './App.css'

function App() {

  function handleClick(){
    alert("I am Clicked")
  }

  function handleMouseOver(){
    alert("Para ke upper mouse layae ho ")
  }

  function handleInputChange(e){
    //console.log("Input  me value change hui he");
    console.log("Value till now:",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form Submit kr du kya")
  }
  

  return (
    <div>
{/* 
<form onSubmit={handleSubmit}>
  <input type='text' onChange={handleInputChange}/>
  <button type='submit'>Submit</button>
</form> */}

{/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
  I am a para
</p>

      <button onClick={handleClick}>
        click me
      </button> */}
    </div>
  )
}

export default App


