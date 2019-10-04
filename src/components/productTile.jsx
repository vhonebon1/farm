import React from 'react';
import Dropdown from './dropdown';
import formatter from './../utils/priceFormatter';

class ProductTile extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       selectedVariant: null,
     }
   }

   handleVarientSelect = (id) => {
     if (id !== 0) {
       this.setState({ selectedVariant: id - 1 });
     } else {
       this.setState({ selectedVariant: null });
     }
   }

   getOptions = () => {
     const { variants } = this.props.product;
     const options = [{'label': this.props.product.measurement.displayName, 'id': 0}];
     for (var variant in variants) {
       options.push({'label': variants[variant].measurement.displayName, 'id': parseInt(variant) + 1});
     }
     return options;
   }

   render() {
     const { name, producer, measurement, price, pricePerUnit, media, variants, saleText, salePrice, tags } = this.props.product;
     const { selectedVariant } = this.state;
     const displayPrice = selectedVariant ? variants[selectedVariant].price.pence : price.pence;
     const displayPricePerUnit = selectedVariant ? variants[selectedVariant].pricePerUnit : pricePerUnit;
     const displaySaleText = salePrice ? selectedVariant ? variants[selectedVariant].saleText : saleText : null;
     const displaySalePrice = salePrice ? selectedVariant ? variants[selectedVariant].salePrice.pence : salePrice.pence : null;

     return(
       <div className="productTile">
         <div className="productTile__image--wrapper">
           <img className="productTile__image" src={media[0].url} alt="" />
           { tags.length > 0 && <div className="productTile__tag">{tags[0].name}</div> }
         </div>
         <div className="productTile__info">
           <div>
             <h2 className="productTile__info--name">{name}</h2>
             <div className="productTile__info--producer">{producer.name}</div>
             { variants.length > 1 ?
               <Dropdown
                 options={this.getOptions()}
                 selected={this.selectedVariant}
                 customOnClick={this.handleVarientSelect}
                />
               : <div className="productTile__info--measurement">{measurement.displayName}</div>
             }
             { saleText ?
               <React.Fragment>
                 <div className="productTile__info--saleText">{displaySaleText}</div>
                 <div className="productTile__info--initialPrice">{formatter.format(displayPrice/100)}</div>
                 <div className="productTile__info--priceWrapper">
                   <div className="productTile__info--salePrice">{formatter.format(displaySalePrice/100)}</div>
                   <div className="productTile__info--price">{displayPricePerUnit}</div>
                 </div>
               </React.Fragment>
               :
               <div className="productTile__info--priceWrapper">
                 <div className="productTile__info--price">{formatter.format(displayPrice/100)}</div>
                 <div className="productTile__info--price">{displayPricePerUnit}</div>
               </div>
             }
           </div>
         </div>
         <div className="productTile__actionButtons">
           <div className="productTile__bookmark"></div>
           <button className="button">Add</button>
         </div>
       </div>
     )
   }
}

export default ProductTile;
