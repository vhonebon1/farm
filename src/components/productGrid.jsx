import React from 'react';
import ProductTile from './productTile';

const ProductGrid = ({ products }) =>
  <div className="productGrid">
    { products.map((product) =>
        <ProductTile product={product} />
      )
    }
  </div>


export default ProductGrid;
