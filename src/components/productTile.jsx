import React from 'react';
import Dropdown from './dropdown';

class ProductTile extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       selectedVariant: null,
     }
   }

   handleVarientSelect = (id) => {
     this.setState({ selectedVariant: id })
   }

   variantOptions = () => {
     const { variants } = this.props.product;
     const options = [];
     for (var variant in variants) {
       options.push({'label': variants[variant].measurement.displayName, 'id': variant})
     }
     return options;
   }

   render() {
     const { name, producer, measurement, price, pricePerUnit, media, variants } = this.props.product;
     const { selectedVariant } = this.state;
     const displayPrice = selectedVariant ? variants[selectedVariant].price.pence : price.pence;
     const displayPricePerUnit = selectedVariant ? variants[selectedVariant].pricePerUnit : pricePerUnit;

     return(
       <div className="productTile">
         <div className="productTile__image--wrapper">
           <img className="productTile__image" src={media[0].url} />
         </div>
         <div className="productTile__info">
           <h2 className="productTile__info--name">{name}</h2>
           <div className="productTile__info--producer">{producer.name}</div>
           { variants.length > 1 ?
             <Dropdown
               options={this.variantOptions()}
               selected={this.selectedVariant}
               customOnClick={this.handleVarientSelect}
              />
             : <div className="productTile__info--measurement">{measurement.displayName}</div>
           }
         <div className="productTile__info--priceWrapper">
           <div className="productTile__info--price">£{displayPrice / 100}</div>
           <div className="productTile__info--price">{displayPricePerUnit}</div>
         </div>
         <button className="button">Add</button>
       </div>
     </div>
     )
   }
}

export default ProductTile;
