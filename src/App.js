import React from 'react';
import products from './data/products.json';
import ProductGrid from './components/productGrid.jsx'
import Header from './components/header.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      hasData: false
    };
  }

  componentDidMount() {
    this.setState({
      products: products.data.productSearch.nodes,
      hasData: true
    })
  }

  render() {
    return(
      <div className="App">
        <Header />
        { this.state.hasData &&
          <ProductGrid
            products={this.state.products}
          />
        }
      </div>
    )
  }
}

export default App;
