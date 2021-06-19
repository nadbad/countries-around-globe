import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarMine() {
	return (
		<Navbar className='navbar'>
			<Navbar.Brand href='/' className='navbar-brand'>
				<Navbar.Text className='navbar-brand-text'>
					Around the Globe
				</Navbar.Text>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text className='navbar-mode'>Mode</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
}
