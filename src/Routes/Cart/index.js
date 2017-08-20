import React, { Component } from 'react';
import ShoppingBar from "../../Components/ShoppingBar";
import ShoppingCart from "../../Components/ShoppingCart";
import {connect} from 'react-redux';

class Cart extends Component {


  render() {
    const selectedItems = Object.keys(this.props.shoppingCart).map(e=>
      Object.assign(this.props.products[e],
                    this.props.shoppingCart[e]
                    ))
    return (
      <div>
      <ShoppingBar button = "Go back to shopping"/> 
      <ShoppingCart selectedItems={ selectedItems } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shoppingCart:state.shoppingCart,
  products:state.products,
})

export default connect(mapStateToProps)(Cart);