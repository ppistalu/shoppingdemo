import React from 'react';
import ProductItem from '../ProductItem'

const Products = (props) => (
      <div>
      {props.products.map(e =>
      <ProductItem products={ e } key={e.id}/>
      )}
      </div>
    );

export default (Products);
