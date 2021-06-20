import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import { root } from '../../api.json';

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
const url = root;

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
