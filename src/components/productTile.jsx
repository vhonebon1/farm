import React from 'react';

const ProductTile = ({ product }) =>
  <div>
    <img src={product.media[0].url} />
    <div>{product.name}</div>
    <div>{product.measurement.displayName}</div>
    <div>{product.producer.name}</div>
    <div>£{product.price.pence / 100}</div>
  </div>


export default ProductTile
