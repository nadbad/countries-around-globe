import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavbarMine from './mainPageSub/navbarMine';
import { loadcountries } from '../../store/countries';
import Countries from './mainPageSub/countries';
import Search from './mainPageSub/search';
import { loadcountry } from '../../store/country';

const MainPage = ({ history }) => {
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
			<NavbarMine />
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

export default withRouter(MainPage);
