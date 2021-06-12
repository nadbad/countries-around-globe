import { combineReducers } from '@reduxjs/toolkit';
import CountriesReducer from './countries';

export default combineReducers({
	countries: CountriesReducer,
});
