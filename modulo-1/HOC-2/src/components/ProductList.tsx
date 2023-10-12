import { WhitLoader } from '../hoc/WhitLoader';
import { getHouses } from '../service';
import { Home } from '../types';
import { ProductGrid } from './ProductGrid';
import { ProductItem } from './ProductItem';

interface Props {
  data: Home[];
}

export const ProductList = ({data}: Props) => {

  if (!data) return null;

  return (
    <ProductGrid>
    {data.map((home: Home) => (
      <ProductItem key={home.id} home={home} />
    ))}
  </ProductGrid>
  )
}

const ProductListWhitLoader = WhitLoader(ProductList, getHouses, 'https://house-lydiahallie.vercel.app/api/listings')

export default ProductListWhitLoader