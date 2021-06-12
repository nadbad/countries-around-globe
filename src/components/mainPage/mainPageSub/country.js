import React from 'react';

export default function Country(country) {
	return (
		<div className='country'>
			<img src={country.image} alt='' />
			<div className='country-info'>
				<h3>{country.name}</h3>
				<p>Population: {country.population}</p>
				<p>Region: {country.region}</p>
			</div>
		</div>
	);
}
