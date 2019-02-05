import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../q.svg'
import styled from 'styled-components'

 
export default class Navbar extends Component {

  // const NavWrapper = styled.nav `
  //   background: var(--mainBlue);
  //   .nav-link{
  //       color:var(--mainWhite)!important;
  //       font-size:1.3rem;
  //       text-transform:capitalize;
  //   }`

  render() {

    
    
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk  */}
      

        <Link to= "/" >
          <img src = {logo} alt = "store"
          className = "navbar-brand" />
        </Link>

        <ul className = "navbar-nav align-items-center">
          <li className ="nav-items ml-5">
            <Link to ="/" className ="nav-link"> 
              Vegetables
            </Link>
          </li>

        </ul>
        <Link to= "/cart" className="ml-auto">
          <ButtonContainer>
            <i className = "fas fa-cart-plus"/>
            My Cart
          </ButtonContainer> 
        </Link>
        </NavWrapper>
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

const NavWrapper = styled.nav `
 background: var(--green);
 height:85px;
 .nav-link{
     color:var(--mainWhite)!important;
     font-size:1.3rem;
     text-transform:capitalize;
 }
 `



