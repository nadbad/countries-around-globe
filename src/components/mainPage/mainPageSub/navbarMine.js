import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarMine() {
	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>Countries Globally</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text>Mode Switch : Later</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
}
