import { useEffect, useState } from 'react';
import './FilterCategory.css';

function FilterCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState('');

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const uniqueProducts = [...new Set(products?.map((productItem) => productItem.category))];

  console.log(products);

  useEffect(() => {
    const copyProducts = [...products];

    setFilteredProducts(
      currentSelectedCategory !== ''
        ? copyProducts.filter(
            (productItem) => productItem.category.toLowerCase() === currentSelectedCategory.toLowerCase()
          )
        : copyProducts
    );
  }, [currentSelectedCategory]);

  console.log(currentSelectedCategory);

  return (
    <div>
      <h1>Filter Categories</h1>
      <div>
        {uniqueProducts.map((category) => (
          <button
            key={category}
            onClick={() =>
              setCurrentSelectedCategory(
                currentSelectedCategory !== '' && currentSelectedCategory === category ? '' : category
              )
            }
            className={`${currentSelectedCategory === category ? 'category category-active' : 'category'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='product-main-container'>
        {filteredProducts
          ? filteredProducts.map((productItem) => (
              <div key={productItem.id} className='filtered-products'>
                <p>{productItem.title}</p>
                <p className='category-item'>{productItem.category}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default FilterCategory;
