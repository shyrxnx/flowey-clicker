import { useState } from 'react'
import Button from './components/Button'
import flowey from './assets/flowey.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [autoClicker, setAutoClicker] = useState(0)
  const [autoClickerPrice, setAutoClickerPrice] = useState(10)

  return (
    <>
      <div>
          <img 
            src={flowey} width={254} height={254} 
            className="flowey icon" alt="Flowey from the game Undertale" 
            onClick={() => setCount((count) => count + 1)}
          />
      </div>

      <h1>{count}<br></br>floweys</h1>
      
      <div className="options">
        <AutoClicker 
          count={count}
          setCount={setCount}
          autoClicker={autoClicker}
          setAutoClicker={setAutoClicker}
          autoClickerPrice={autoClickerPrice}
          setAutoClickerPrice={setAutoClickerPrice}
        />
      </div>
      
      <p className="debug">
        {`Auto Clicker: ${autoClicker}`}
      </p>
      <p className="debug">
        {`Auto Clicker Price: ${autoClickerPrice}`}
      </p>

      <hr />

      <p className="creator">
        Made by: Shyrine Salvador
      </p>
    </>
  )
}

function AutoClicker({count, setCount, autoClicker, setAutoClicker, autoClickerPrice, setAutoClickerPrice}) {

  const handleBuy = () => {
    if (count >= autoClickerPrice) {
      setAutoClicker(autoClicker + 1)
      setCount(count - autoClickerPrice)
      setAutoClickerPrice(autoClickerPrice + 2)
    }
  }


  return (
    <Button 
      label={`Buy Auto-Clicker (+1/sec) ${autoClickerPrice}`}
      className='auto-clicker' 
      btnColor='#6e581e'
      onClick={handleBuy}/>
  )
}

export default App
