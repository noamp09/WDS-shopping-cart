import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={increment}>{count}</button>
    </>
  )
}

export default App
