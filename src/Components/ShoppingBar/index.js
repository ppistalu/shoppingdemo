import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {withRouter} from 'react-router';

class ShoppingBar extends React.Component { 
  
  handleClick = () => {
    const id = this.props.match.path;
    if(id==="/"){
      this.props.history.push(`/cart`);
    } else {
      this.props.history.push(`/`);
    }
  }

render() {


    return (
  <AppBar
    title={<span >Buy fruits online</span>}
    iconElementRight={<FlatButton label={this.props.button} onClick={this.handleClick}/>}
  />
    );
  }
};

export default (withRouter(ShoppingBar));
