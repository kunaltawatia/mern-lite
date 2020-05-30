import React from 'react';
import { hot } from 'react-hot-loader/root';

import './App.scss';

export class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>React Hot Boilerplate</h1>
				<img alt="react" src="/media/images/home-illustration.svg" />
			</div>
		);
	}
}

export default hot(App);
