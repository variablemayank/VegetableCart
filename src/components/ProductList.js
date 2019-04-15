import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
    // console.log(this.state.product);
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            console.log("value is" ,value);
            return (
              <div className ="py-5">
                <div className ="container">
                <Title name ="our" title ="vegetables" />
                {/* <div className ="row"> */}
                  <form>
                    <fieldset className="form-group">
                      <input
                        type="text"
                        style={{ width: "100%" }}
                        className="form-control form-control-lg"
                        placeholder="Search"
                        onChange={e => {
                          e.preventDefault();
                          console.log(e.target.value);
                          value.handleFilterProduct(e.target.value);
                        }}
                      />
                    </fieldset>
                  </form>
                  <div className="row">
                    {
                      value.filteredProducts.length ? value.filteredProducts.map(product => {
                        return (<Product key ={product.id} product= {product}/>)
                      }) :  value.products.map(product => {  return (<Product key={product.id} product={product}/>) })
                    }
                  </div>
                  {/* </div> */}
            </div>
            </div>)
          }}
        </ProductConsumer>
      {/* <div className ="py-5">
        <div className ="container">
            <Title name ="our" title ="vegetables" />
            <div className ="row">

            <form>
              <fieldset className="form-group">
                <input 
                  type="text"
                  style={{ width: "200%" }}
                  className="form-control form-control-lg"
                  placeholder="Search"
                  onChange={e => {
                    console.log(e.target.value);
                    <ProductConsumer>
                      {value => {
                        console.log(value);
                      }}
                    </ProductConsumer>
                  }}
                />
              </fieldset>
            </form>
              
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product ={product} />
                })
              }}
            </ProductConsumer>
            </div>
        </div>

      </div> */}
      
      </React.Fragment>
    )
  }
}
