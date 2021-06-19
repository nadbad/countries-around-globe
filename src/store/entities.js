import { combineReducers } from '@reduxjs/toolkit';
import CountriesReducer from './countries';
import CountryReducer from './country';

export default combineReducers({
	countries: CountriesReducer,
	country: CountryReducer,
});
