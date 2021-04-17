import { useQuery } from 'react-query'
import Products from './components/Products'
import Cart from './features/cart'
import { CartItemType } from './types'

const fetchProducts = async (): Promise<CartItemType[]> => {
  return await(await fetch('https://fakestoreapi.com/products').then(res => res.json()))
}

function App() {
  const { data, error, isLoading} = useQuery<CartItemType[]>('products', fetchProducts)

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Something went wrong...</div>

  console.log('data:', data);

  return (
    <div>
      <Products products={data} />
      <Cart/>
    </div>
  );
}

export default App;
