import { useState } from 'react'
import init, { greet_user } from 'game-filter-core'
import './App.css'

await init()

function App() {
  const [msg, setMsg] = useState('')

  const handleClick = () => {
    const result = greet_user("Ayre")
    setMsg(result)
  }

  return (
    <div className="app-container">
      <h1>Дипломна робота: WASM + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          Тест WebAssembly
        </button>
        <p style={{marginTop: '20px', fontSize: '20px', color: '#66c0f4'}}>
          {msg}
        </p>
      </div>
    </div>
  )
}

export default App