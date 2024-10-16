import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'
import Button from './Button'
function App() {
  const [count,setCount]=useState(1)

  return <>
  {count < 3 ? <Count count={count}  /> :null}
  
  <Button setCount={setCount}/>
  </>
}
export default App
