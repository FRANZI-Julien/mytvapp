import { useState } from 'react'
import './App.css'
//import { Mongif } from './components/Mongif'
import { Search } from './components/Search'

function App() {
  const [title, setTitle] = useState('MY TV SHOW')

  return (
    <div className="App">
      <h1>{title}</h1>
      {/* <button onClick={() => setTitle('Mon nouveau titre')}>changer le titre</button> */}
      {/* <Mongif/> */}
      <Search/>
    </div>
  )
}

export default App
