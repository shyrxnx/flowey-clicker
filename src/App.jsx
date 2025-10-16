import { useState, useEffect } from 'react'
import Button from './components/Button'
import flowey from './assets/flowey.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [clicker, setClicker] = useState(1)
  const [clickerPrice, setClickerPrice] = useState(5)  
  const [autoClicker, setAutoClicker] = useState(0)
  const [autoClickerPrice, setAutoClickerPrice] = useState(10)

  const counter = () => {
    if (clicker > 0){
      setCount(count + clicker);
    }
  }

  useEffect(() => {
    let interval;

    if (autoClicker > 0) {
      interval = setInterval(() => {
        setCount(prev => prev + autoClicker);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [autoClicker]);

  return (
    <>
      <div>
          <img 
            src={flowey} width={254} height={254} 
            className="flowey icon" alt="Flowey from the game Undertale" 
            onClick={counter}
          />
      </div>

      <h1>{Number(count).toFixed(2)}<br></br>floweys</h1>
      
      <div className="options">
        <AutoClicker 
          count={count}
          setCount={setCount}
          clicker={clicker}
          setClicker={setClicker}
          clickerPrice={clickerPrice}
          setClickerPrice={setClickerPrice}          
          autoClicker={autoClicker}
          setAutoClicker={setAutoClicker}
          autoClickerPrice={autoClickerPrice}
          setAutoClickerPrice={setAutoClickerPrice}
        />
      </div>

      <div className='debug-container'>
        <div className='debug-column'>
          <p> {` Clicker: ${clicker}`} </p>
          <p> {`Clicker Price: ${clickerPrice}`} </p> 
        </div>

        <div className='debug-column'>
          <p> {`Auto Clicker: ${autoClicker}`} </p>
          <p> {`Auto Clicker Price: ${autoClickerPrice}`} </p>
        </div>
      </div>
     
      <hr width={500} />

      <p className="creator">
        Made by: Shyrine Salvador
      </p>
    </>
  )
}

function AutoClicker({count, setCount, clicker, setClicker, clickerPrice, setClickerPrice, autoClicker, setAutoClicker, autoClickerPrice, setAutoClickerPrice}) {

  const handleBuyClicker = () => {
    if (count >= clickerPrice) {
      setClicker(clicker + 1)
      setCount(count - clickerPrice)
      setClickerPrice(Number((5 * (1.1) ** (clicker + 1)).toFixed(2)))
    }
  }

  const handleBuyAutoClicker = () => {
    if (count >= autoClickerPrice) {
      setAutoClicker(autoClicker + 1)
      setCount(count - autoClickerPrice)
      setAutoClickerPrice(Number((10 * (1.1) ** (autoClicker + 1)).toFixed(2)))
    }
  }

  return (

    <>
      <div className='upgrade-container'>
        <Button 
          label={`Buy Clicker (${clicker})`}
          className='clicker' 
          btnColor='#6e581e'
          onClick={handleBuyClicker}/>

        <Button 
          label={`Buy Auto-Clicker (+${autoClicker}/sec)`}
          className='auto-clicker' 
          btnColor='#6e581e'
          onClick={handleBuyAutoClicker}/>
      </div>
    </>

  )
}

export default App
