import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		console.log(this.storeInput.value);
		// first grab text from the box
		// second transition from / to /store/:storeID
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
				<h2>Please Enter Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
				<button>Submit</button>
			</form>
			)
	}
};

export default StorePicker;