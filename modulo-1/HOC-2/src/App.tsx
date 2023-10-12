import { useContext } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import ProductListWhitLoader from './components/ProductList'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <>
      <Navbar />
      <main className={`p-12 h-screen ${theme === 'light' ? 'bg-white' : 'bg-slate-900'}`}>
        <ProductListWhitLoader data={[]} />
      </main>
    </>
  )
}

export default App
