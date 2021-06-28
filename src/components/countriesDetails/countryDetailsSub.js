import React from 'react';
import Button from 'react-bootstrap/Button';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';
import { COUNTRYCODES } from '../../countryCodes';
import { Link } from 'react-router-dom';

function BorderCountries({ borders }) {
	return (
		<div className='border-container'>
			<div style={{ display: 'block', width: '200px' }}>
				<h3 className='border-countries-title'>Border Countries: </h3>
			</div>

			<div className='border-countries-button-container'>
				{borders
					.filter((country, index) => {
						return index < 4;
					})
					.map(country => (
						<Link
							key={country}
							to={`/country/${COUNTRYCODES[country]}`}>
							<Button className='border-countries-buttons'>
								{COUNTRYCODES[country]}
							</Button>
						</Link>
					))}
			</div>
		</div>
	);
}

export default function CountryDetailsSub() {
	const country = useSelector(state => state.entities.country.list);

	return (
		<div className='country-details-country'>
			<div>
				<Button
					className='button-back'
					onClick={() => window.history.back()}>
					Back
				</Button>
			</div>

			{country && country.length ? (
				<div className='content'>
					<LazyLoad height={160} offset={100} once>
						<img
							src={country[0].flag}
							alt={`flag for ${country[0].name}`}
							className='content-country-image'
						/>
					</LazyLoad>

					<div className='country-container'>
						<h3 className='country-container-information-title'>
							{country[0].name}
						</h3>
						<div className='country-container-information'>
							<p className='country-container-information-par-1'>
								<span>Native name: </span>
								{country[0].name}
								<br></br>
								<span>Population: </span>
								{country[0].population.toLocaleString()}
								<br></br>
								<span>Region: </span>
								{country[0].region}
								<br></br>
								<span>Sub region: </span>
								{country[0].subregion}
								<br></br>
								<span>Capital: </span>
								{country[0].capital}
							</p>
							<p className='country-container-information-par-2'>
								<span>Top level domain: </span>
								{country[0].topLevelDomain}
								<br></br>
								<span>Currencies: </span>
								{country[0].currencies.map(currency => {
									return currency.name;
								})}
								<br></br>
								<span>Languages: </span>
								{country[0].languages &&
									country[0].languages
										.map(language => language.name)
										.join(', ')}
							</p>
						</div>
						{country[0].borders && country[0].borders.length > 0 && (
							<BorderCountries borders={country[0].borders} />
						)}
					</div>
				</div>
			) : (
				<h2>Loading</h2>
			)}
		</div>
	);
}
