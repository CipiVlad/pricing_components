import TogglePrice from './components/TogglePrice'
import './scss/App.scss'
import BackgroundTopSvg from './components/BackgroundTopSvg'
import BackgoundBottomSvg from './components/BackgoundBottomSvg'
import PriceList from './components/PriceList'
import { useState } from 'react'
function App() {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div className="App">
      <BackgroundTopSvg />
      <TogglePrice toggle={toggle} setToggle={setToggle} />
      <PriceList toggle={toggle} />
      <BackgoundBottomSvg />
    </div>
  )
}

export default App
