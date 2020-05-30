import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { register } from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/* istanbul ignore next */
register({
	onUpdate: () => {
		/**
		 * Pass notification of website update
		 */
	},
});
