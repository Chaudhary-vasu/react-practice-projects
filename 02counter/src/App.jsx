import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);  
  const addValue =() => {
    counter = counter + 1
    if (counter > 20) {
      counter = counter - 1 
    }
    setCounter(counter)
    console.log("AddValue Called.",counter)
  }

  const removeValue = () => {
    counter = counter - 1
    if (counter < 0) {
      counter = 0 
    }
    setCounter(counter)
    console.log("RemoveValue Called.",counter)
  }
  
  return (
    <>
      <h2>Counter Project for Learning Hooks need.</h2>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
