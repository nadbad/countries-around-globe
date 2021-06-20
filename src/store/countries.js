import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { apiCallBegan } from './api';
import { root } from '../../api.json';

const slice = createSlice({
	name: 'countries',
	initialState: {
		list: [],
		loading: false,
		lastFetch: null,
	},
	reducers: {
		countriesRequested: (countries, action) => {
			countries.loading = true;
		},
		countriesReceived: (countries, action) => {
			countries.list = action.payload;
			countries.loading = false;
			countries.lastFetch = Date.now();
		},
		countriesRequestFailed: (countries, action) => {
			countries.loading = false;
		},
	},
});

const {
	countriesReceived,
	countriesRequested,
	countriesRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = root;

export const loadcountries = () => (dispatch, getState) => {
	const { lastFetch } = getState().entities.countries;

	const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
	if (diffInMinutes < 10) return;

	dispatch(
		apiCallBegan({
			url: `${url}/all`,
			onStart: countriesRequested.type,
			onSuccess: countriesReceived.type,
			onError: countriesRequestFailed.type,
		})
	);
};
