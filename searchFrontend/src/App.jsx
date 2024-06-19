import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import SearchPage from './Components/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </>
  )
}

export default App
