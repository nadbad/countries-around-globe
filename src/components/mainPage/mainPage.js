import React, { useEffect } from 'react';
import NavbarMine from './mainPageSub/navbarMine';
import { useDispatch } from 'react-redux';
import { loadcountries } from '../../store/countries';
import Countries from './mainPageSub/countries';

export default function MainPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadcountries());
	});
	return (
		<div>
			<NavbarMine />
			<Countries />
		</div>
	);
}
