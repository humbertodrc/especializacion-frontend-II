import './App.css'
import { Navbar } from './components/Navbar'
import { ProductList } from './components/ProductList'

function App() {

  return (
    <>
      <Navbar />
      <main className='p-12 h-screen'>
        <ProductList />
      </main>
    </>
  )
}

export default App
