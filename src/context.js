import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
// Provider
//Consumer
 class ProductProvider extends Component {
  
  state = {
      products:storeProducts,
      detailProduct:detailProduct
  }

  handleDetails = () => {
      console.log('hello from details');
  }

  addToCart = () => {
      console.log("hello from add to cart");
  }

  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetails:this.handleDetails,
          addToCart:this.addToCart
      }} >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };