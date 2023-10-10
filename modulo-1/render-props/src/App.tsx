import './App.css'
import { Fahrenheit, Input, Kelvin } from './components'

function App() {

  return (
    <div className="App">
      <h1>Convertidor de Temperatura⛅</h1>
      <Input />
      <Kelvin value={0} />
      <Fahrenheit value={0} />
    </div>
  )
}

export default App
