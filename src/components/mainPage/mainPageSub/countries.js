import React from 'react';
import Country from './country';
import { useSelector } from 'react-redux';

export default function Countries() {
	const countries = useSelector(
		state => state.entities.countries.list
	);
	return (
		<div className='countries'>
			{countries.map(country => {
				return (
					<Country
						country=''
						name={country.name}
						population={country.population}
						region={country.region}
						image={country.flag}
					/>
				);
			})}
		</div>
	);
}
