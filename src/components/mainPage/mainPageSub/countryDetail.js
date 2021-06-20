import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NavbarMine from './navbarMine';
import CountryDetailsSub from './countryDetailsSub';
import { loadcountry } from '../../../store/country';

export default function CountryDetail() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadcountry(window.location.pathname.slice(8)));
	}, [dispatch]);
	return (
		<div>
			<NavbarMine />
			<div className='country-details'>
				<CountryDetailsSub />
			</div>
		</div>
	);
}
