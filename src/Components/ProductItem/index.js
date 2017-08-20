import React from 'react';
import {addProduct} from "../../Store/actions.js"
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  addToCart = () => {
    const id = this.props.products.id;
    const qty = this.state.value;
    this.props.dispatch(addProduct(id,qty));
  }

  render() {
    const items = [];
    for (let i = 0; i < 30; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={i} />);
    }

    const {products} = this.props;

    return (
    <Card style = {{width:"25%", margin:'auto', marginTop:'40px'}}>
    <CardMedia>
      <img src={products.picture} alt="" />
    </CardMedia>
    <CardTitle title={products.name}  subtitle={"Price: "+products.price+" ct/pc"}/>
     {products.discount &&
        <p style={{marginLeft:"40%",fontWeight: "bold"}}>
          {products.discount + "!"}
        </p>
      }
          <div>
      <p style={{marginLeft:"70%"}}>Quantity:</p>
      <SelectField style={{width:"15%", marginLeft:"73%", display:"inline-block"}}
        value={this.state.value}
        onChange={this.handleChange}
        maxHeight={200}
      >
        {items}
      </SelectField>
      </div>
    <CardActions style={{marginLeft:"60%"}}>
      <FlatButton label="Add to cart" onClick={this.addToCart}/>
    </CardActions>
  </Card>
    );
  }
}

export default connect()(ProductItem);