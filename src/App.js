import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadcountries } from './store/countries';
import Search from './components/search/search';
import { loadcountry } from './store/country';
import Navbar from './components/navbar/navbar';
import Countries from './components/home/countries';

const App = ({ history }) => {
	const [countryQuery, setCountryQuery] = useState('');
	const [regionSelection, setRegionSelection] = useState('');

	const filterByRegion = e => {
		const query = e.currentTarget.value;
		setRegionSelection(query);
	};

	const filterCountries = e => {
		setCountryQuery(e);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadcountries());
	}, [dispatch]);

	history.listen((location, action) => {
		if (location.pathname && location.pathname.length > 2)
			dispatch(loadcountry(window.location.pathname.slice(8)));
	});

	return (
		<div className='mainPage'>
			<Navbar />
			<Search
				filterCountries={filterCountries}
				filterByRegion={filterByRegion}
			/>
			<div className='main'>
				<Countries
					countryQuery={countryQuery}
					regionSelection={regionSelection}
				/>
			</div>
		</div>
	);
};

export default withRouter(App);
