import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarMine() {
	const [mode, setMode] = useState('Light Mode');

	const darkMode = () => {
		const body = document.getElementById('root');
		if (body.className === '') {
			setMode('Dark Mode');
			body.className = 'dark';
		} else if (body.className === 'dark') {
			setMode('Light Mode');
			body.className = '';
		}
	};
	return (
		<Navbar className='navbar'>
			<Navbar.Brand href='/' className='navbar-brand'>
				<Navbar.Text className='navbar-brand-text'>
					Around the Globe
				</Navbar.Text>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text className='navbar-mode' onClick={darkMode}>
					{mode}
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
}
