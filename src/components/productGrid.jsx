import React from 'react';
import ProductTile from './productTile';

const ProductGrid = ({ products }) =>
  <div className="productGrid">
    { products.map((product, index) =>
        <ProductTile product={product} key={index} />
      )
    }
  </div>


export default ProductGrid;
