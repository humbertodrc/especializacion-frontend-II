import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
export const Navbar = () => {

  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <div className={`w-full px-5 py-4 flex justify-between items-center shadow-sm ${theme === 'light' ? 'bg-white' : 'bg-slate-900 border-gray-700 border-b'}`}>
      <h1 className='text-2xl font-bold text-pink-500'>Houses</h1>
      <div>
        <button className='bg-pink-500 text-white rounded-md px-4 py-2 ml-4'>Login</button>
        {/* Cambiar de tema */}
        <button className='bg-pink-500 text-white rounded-md px-4 py-2 ml-4' onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}