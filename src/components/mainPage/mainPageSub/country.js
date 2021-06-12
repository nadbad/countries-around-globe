import React from 'react';

export default function Country(country) {
	return (
		<div className='country'>
			<div className='content'>
				<div>
					<img src={country.image} alt='' />
				</div>
				<div className='country-info'>
					<h3>{country.name}</h3>
					<p>Population: {country.population}</p>
					<p>Region: {country.region}</p>
				</div>
			</div>
		</div>
	);
}
