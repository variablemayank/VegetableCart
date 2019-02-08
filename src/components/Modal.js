import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value) => {
              const {modalOpen,closeModal} = value;
              const{img, title,price} = value.modalProduct;

              if(!modalOpen){
                  return null;
              }
              else{
                //   <ModalContiner>

                //   </ModalContiner>
              }
              return 
          }}
      </ProductConsumer>
    )
  }
}

const ModalContiner = styled.div`

`
