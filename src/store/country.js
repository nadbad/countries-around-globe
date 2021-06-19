import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
	name: 'country',
	initialState: {
		list: [],
		loading: false,
	},
	reducers: {
		countryRequested: (country, action) => {
			country.loading = true;
			country.list = [];
		},
		countryReceived: (country, action) => {
			country.list = action.payload;
			country.loading = false;
			country.lastFetch = Date.now();
		},
		countryRequestFailed: (country, action) => {
			country.loading = false;
		},
	},
});

const { countryReceived, countryRequested, countryRequestFailed } =
	slice.actions;
export default slice.reducer;

// Action Creators
const url = process.env.REACT_APP_COUNTRIES_API;

export const loadcountry = country => dispatch => {
	dispatch(
		apiCallBegan({
			url: `${url}/name${country}`,
			onStart: countryRequested.type,
			onSuccess: countryReceived.type,
			onError: countryRequestFailed.type,
		})
	);
};
