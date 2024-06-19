import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let userdata = {"age":22,"name":"Vasu Chaudhary"}
  return (
    <>
      <h1 className="bg-green-400 text-black mb-4 p-4 rounded-xl">Tailwind Test</h1>
      <Card username = "Vasu Chaudhary"/>
      <Card username="Mohit Yadav"/>
    </>
  )
}

export default App
