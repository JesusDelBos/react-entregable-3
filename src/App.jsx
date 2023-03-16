import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import header from './assets/img/background_header.png'
import body from './assets/img/background_page.png'
import Riandm_app from './components/Riandm_app'

function App() {
  const [count, setCount] = useState(0)

  //<style backgroun ></style>
  return (
    <div className="App">
      <header>
          <img src = {header} alt="" width="100%" height="2%" />
      </header>
      {/*<img src = {body} alt="" width="100%" />*/}

      <Riandm_app />
      
      <footer>

      </footer>
    </div>
  )
}

export default App