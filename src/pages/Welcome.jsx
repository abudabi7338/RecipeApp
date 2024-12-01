import React from 'react';
import '../styles/pages/welcome.scss';
import Button from '../components/Button';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Welcome() {
	return (
		<div className='welcome-container'>
			<img className='logo-welcome' src={logo} alt='logo, food' />
			<h1>PantryPlanner</h1>
			<Link to="/home">
				<Button>Go</Button> 
			</Link>
		</div>
	);
}

export default Welcome;
