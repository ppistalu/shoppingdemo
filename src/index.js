import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shopping from './Routes/Shopping';
import Cart from './Routes/Cart';
import {Provider} from 'react-redux';
import store from './Store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();


ReactDOM.render(<Provider store={store}>
		<MuiThemeProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={Shopping} />
					<Route exact path="/cart" component={Cart} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	</Provider>,

	document.getElementById('root'));
registerServiceWorker();