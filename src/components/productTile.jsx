import React from 'react';

const ProductTile = ({ product }) =>
  <div className="productTile">
    <div className="productTile__image--wrapper">
      <img className="productTile__image" src={product.media[0].url} />
    </div>
    <div className="productTile__info">
      <h2 className="productTile__info--name">{product.name}</h2>
      <div className="productTile__info--producer">{product.producer.name}</div>
      <div className="productTile__info--measurement">{product.measurement.displayName}</div>
      <div className="productTile__info--priceWrapper">
        <div className="productTile__info--price">£{product.price.pence / 100}</div>
        <div className="productTile__info--price">{product.pricePerUnit}</div>
      </div>
      <button className="button">Add</button>
    </div>
  </div>

export default ProductTile;
