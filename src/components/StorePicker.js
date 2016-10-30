import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		// first grab text from the box
		const storeId = this.storeInput.value;
		console.log(storeId);
		console.log(`Going to ${storeId}`);
		// second transition from / to /store/:storeID
		this.context.router.transitionTo(`/store/${storeId}`);
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

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;