import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

 function totalPerItem(prod) {
  if(prod.discount){
    return ((Math.floor(prod.quatity / 3) * prod.price) * 2) + ((prod.quatity % 3) * prod.price)
  } else {
      return (prod.quatity * prod.price)
  }
}

  function total(products) {
    return products.map(e => totalPerItem(e)).reduce(function(sum, value) {
      return sum + value;
    }, 0);
  }

const ShoppingCart = (props) => (
    <Table>
      <TableHeader >
      <TableRow>
        <TableHeaderColumn>Quantity</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Discount</TableHeaderColumn>
        <TableHeaderColumn>Total</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
    {props.selectedItems.map(e =>
      <TableRow key={e.id}>
        <TableRowColumn>{e.quatity}</TableRowColumn>
        <TableRowColumn>{e.name}</TableRowColumn>
        <TableRowColumn>{e.price + " ct"}</TableRowColumn>
        <TableRowColumn>{e.discount}</TableRowColumn>
        <TableRowColumn>{totalPerItem(e)}</TableRowColumn>
      </TableRow>
      )}
       <TableRow>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{total(props.selectedItems)}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default ShoppingCart;