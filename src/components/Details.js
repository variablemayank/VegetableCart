import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {

          const { id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className = "container py-5">
          {/* ---------title---------------- */}
              <div className = "row">
                  <div className ="col-10 mx-auto text-center text -slanted text-blue my-5">
                  <h1>{title}</h1>
                  </div>
              </div>
            {/* ---------------- end title ------------- */}
          {/* ------------------product info ------------ */}
              <div className ="col-10 mx-auto col-md-6 my-3">
              </div>
              <img src = {img} className = "img-fluid" alt = "product" />
              {/* ----------------product text -------------- */}
              <div className ="col-10 mx-auto col-md-6 my-3 
              text-capitalize">
              <h2>Details : {title} </h2>
              <h4 className = "text-title text-uppercase text-muted mt-3 mb-2"> 
               made by : <span className ="text-uppercase">
               {company} </span>
              </h4>
              <h4 className = "text-green">
                <strong>
                  price: <span>Rs.</span> 
                  {price}
                </strong>
              </h4>
              <p className ="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product:
              </p>
              <p className="text-muted lead">{info}</p>
              {/* --button-- */}
              <Link to = "/" >
                <ButtonContainer>back to 
                  products
                </ButtonContainer>
              </Link>
              </div>
          </div>
          )
        }}
      </ProductConsumer>
    )
  }
}


const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.5 rem solidv var(--lightBlue);
  color:var(--black);
  border-radius:0.5rem;
  paddding: 0.2rem 0.5rem;
  cursor:pointer;
  margin:0.2rem 0.5 rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
  &:hover {
    background:var(--white);
    color:var(--mainBlue);
  }
  &:focus{
    outline:none;
  }
`;
