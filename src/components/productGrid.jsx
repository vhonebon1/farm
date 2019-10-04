import React from 'react';
import ProductTile from './productTile';

const ProductGrid = ({ products }) =>
  <React.Fragment>
    { products.map((product) =>
        <ProductTile product={product} />
      )
    }
  </React.Fragment>


export default ProductGrid;
