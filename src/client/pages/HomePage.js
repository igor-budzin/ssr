import React from 'react';

const Home = () => {
	return (
		<div>
			<div>Home component "2222"</div>
			<button onClick={() => console.log('Click')}>Click me</button>
		</div>
	)
}

export default {
	component: Home
};