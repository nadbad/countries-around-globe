import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Country(country) {
	return (
		<Link to={`/country/${country.name}`}>
			<Card className='country'>
				<Card.Img
					variant='top'
					src={country.image}
					alt={`flag for ${country.name}`}
					className='country-image'
				/>
				<Card.Body>
					<Card.Title>{country.name}</Card.Title>
					<Card.Text>
						<span>Population:</span>{' '}
						{country.population.toLocaleString()}
						<br></br>
						<span>Region:</span> {country.region}
						<br></br>
						<span>Capital:</span> {country.capital}
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
}

export default Country;
