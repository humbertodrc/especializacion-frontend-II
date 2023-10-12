import './App.css'
import { Section } from './components/Section'
import { WhitColorSwap } from './hoc/WhitColorSwap'

const SectionWhitColorSwap = WhitColorSwap(Section)

function App() {

  return (
    <div className="App">
      <SectionWhitColorSwap title='Higher Order Component' description='Hi HOC'  />
    </div>
  )
}

export default App
