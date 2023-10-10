import {FC} from 'react'

interface ProductGridProps {
  children: React.ReactNode
}

export const ProductGrid:FC<ProductGridProps> = ({children}) => {
  return (
    <div className='flex flex-wrap items-center justify-center w-full gap-8'>
      {children}
    </div>
  )
}