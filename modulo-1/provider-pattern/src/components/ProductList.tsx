import { useEffect, useState } from 'react';
import { getHouses } from '../service';
import { Home } from '../types';
import { ProductItem } from './ProductItem';
import { ProductGrid } from './ProductGrid';

export const ProductList = () => {

  const [homes, setHomes] = useState<Home[]>([])

  useEffect(() => {
    getHouses('https://house-lydiahallie.vercel.app/api/listings').then((homes) => setHomes(homes))
  }, [])
  


  if (!homes) return null;

  return (
    <ProductGrid>
    {homes.map((home: Home) => (
      <ProductItem key={home.id} home={home} />
    ))}
  </ProductGrid>
  )
}