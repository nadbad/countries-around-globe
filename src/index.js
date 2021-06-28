import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass/sass.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountryDetail from './components/countriesDetails/countryDetail';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route exact path='/' component={App} />
			<Route path='/country/:country' component={CountryDetail} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
