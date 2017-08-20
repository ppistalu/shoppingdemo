import {products} from "./Reducers/products";
import {shoppingCart} from "./Reducers/shoppingCart";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const reducer = combineReducers({
	products,
	shoppingCart,
})

const store = createStore(reducer,
	applyMiddleware(thunk)
	);

export default store;