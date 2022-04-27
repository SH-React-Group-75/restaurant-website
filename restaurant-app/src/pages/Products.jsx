import {useState} from 'react'
import Product from '../components/Product'
import '../CSS/product.scss'

function Products() {
    const [selected, setSelected] = useState(1)
  return (
    <div className="wrapper">
      <div className='product-wrapper'>
        <h1 className='text'>Our Menu</h1>
        <Product selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}

export default Products