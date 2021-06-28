import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from '../navbar/navbar';
import CountryDetailsSub from './countryDetailsSub';
import { loadcountry } from '../../store/country';

export default function CountryDetail() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadcountry(window.location.pathname.slice(8)));
	}, [dispatch]);
	return (
		<div>
			<Navbar />
			<div className='country-details'>
				<CountryDetailsSub />
			</div>
		</div>
	);
}
