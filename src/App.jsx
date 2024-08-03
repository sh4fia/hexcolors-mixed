import './App.css'
import ColorInput from './components/ColorInput/ColorInput'
import ColorDisplay from './components/ColorDisplay/ColorDisplay'
import { useState } from 'react'

function App() {

  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");

  const setColors = (num, color) => {
    if (num === "one") {
      setColorOne(color);
    } else {
      setColorTwo(color);
    }
  }

  return (
    <>
      <ColorInput num="one" setColors={setColors} />
      <ColorInput num="two" setColors={setColors} />
      <ColorDisplay colorOne={colorOne} colorTwo={colorTwo} />
    </>
  )
}

export default App
