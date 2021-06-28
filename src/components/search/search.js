import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

export default function Search({ filterCountries, filterByRegion }) {
	const region = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

	return (
		<div className='filter'>
			<div className='filter-content'>
				<FormControl
					type='text'
					placeholder='Search'
					className='filter-content-search'
					onChange={e => filterCountries(e.currentTarget.value)}
				/>
				<form>
					<label className='sr-only' htmlFor='region-filter'>
						Filter by region:
					</label>

					<select
						onChange={filterByRegion}
						id='region-filter'
						name='region-filter'>
						<option value=''>Filter by Region</option>
						{region.map(region => (
							<option key={region} value={region}>
								{region}
							</option>
						))}
					</select>
				</form>
			</div>
		</div>
	);
}
