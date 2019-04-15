import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
    // console.log(this.state.product);
    return (
      <React.Fragment>
      <div className ="py-5">
        <div className ="container">
            <Title name ="our" title ="vegetables" />


            <div className ="row">
            <ProductConsumer>
              {value => {
                const productList = value.filteredProducts.length>0?value.filteredProducts:value.products;
                return productList.map(product => {
                  return <Product key={product.id} product ={product} />
                })
              }}
            </ProductConsumer>
            </div>
        </div>

      </div>
      
      </React.Fragment>
    )
  }
}
