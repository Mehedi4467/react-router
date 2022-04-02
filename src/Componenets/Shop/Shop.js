
import useProduct from '../../hooks/useProduct';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProduct('https://jsonplaceholder.typicode.com/photos');


    return (
        <div className='shop'>
            <h1>All products</h1>
            <div className='shop-body'>
                {products.slice(0, 20).map(product => <Product product={product} key={product.id}></Product>)}
            </div>
        </div>
    );
};

export default Shop;