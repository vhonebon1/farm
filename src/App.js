import React from 'react';
import logo from './logo.svg';
import './App.css';
import products from './data/products.json';
import ProductGrid from './components/productGrid.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log(products.data.productSearch.nodes)
    this.setState({ products: products.data.productSearch.nodes })
  }

  render() {
    return(
      <div className="App">
        { (this.state.products && this.state.products.length > 0) &&
          <ProductGrid
            products={this.state.products}
          />
        }
      </div>
    )
  }
}

export default App;
