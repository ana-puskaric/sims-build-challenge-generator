import './App.css'
import Challenge from './challenge'


function App() {
  return (
    <>
    <div className="title-container">
      <h1>Sims Build Challenge Generator</h1>
      <p>
        {`Press the button to generate a new build challenge.`}
      </p>
      <p>
        {`If a room is required, feel free to add it to the  
        randomly generated number of rooms. Or don't if you want to make the challenge more difficult.`}
      </p>
      <p>
        {`Plenty of options. Have fun.`}
      </p>
    </div>
    <Challenge></Challenge>
    </>
  )
}

export default App
