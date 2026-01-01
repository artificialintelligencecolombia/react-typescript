import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let name: string;
name = "jhon";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {name}
    </div>

  )
}

export default App
