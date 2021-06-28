import React from 'react';
import Country from './country';
import { useSelector } from 'react-redux';

export default function Countries({ regionSelection, countryQuery }) {
	const countries = useSelector(
		state => state.entities.countries.list
	);
	return (
		<div className='countries'>
			{countries &&
				countries
					.filter(country =>
						country.name
							.toLowerCase()
							.includes(countryQuery.toLowerCase())
					)
					.filter(country =>
						country.region
							.toLowerCase()
							.includes(regionSelection.toLocaleLowerCase())
					)
					.map(country => {
						return (
							<Country
								key={country.name}
								country=''
								name={country.name}
								population={country.population}
								region={country.region}
								capital={country.capital}
								image={country.flag}
							/>
						);
					})}
		</div>
	);
}
