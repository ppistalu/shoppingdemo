import React, { Component } from 'react';
import ShoppingBar from "../../Components/ShoppingBar";
import Products from "../../Components/Products";
import {connect} from 'react-redux';

class Shopping extends Component {


  render() {
  	const {products} = this.props;
    return (
      <div>
    <ShoppingBar button = "View your shopping cart"/> 
      <Products products={ products }/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
	products:Object.values(state.products),
})

export default connect(mapStateToProps)(Shopping);
