import { useState } from 'react'

import './index.css'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Homepage />
      </div>
    </>
  )
}

export default App
