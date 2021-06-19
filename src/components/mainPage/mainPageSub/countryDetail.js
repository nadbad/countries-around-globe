import React from 'react';
import NavbarMine from './navbarMine';
import CountryDetailsSub from './countryDetailsSub';

export default function CountryDetail() {
	return (
		<div>
			<NavbarMine />
			<div className='country-details'>
				<CountryDetailsSub />
			</div>
		</div>
	);
}
