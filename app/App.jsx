import React from 'react';

export default class App extends React.Component {

	constructor( props ) {

		super( props );

		this.state = {
			count: this.props.first
		}

	}

	increment() {
		this.setState( {
			count: this.state.count + 1
		} )
	}

	render() {
		return (
			<div>
				<p>Count: { this.state.count }</p>
				<p>this will be evaluated: { 1 + 1 }</p>
        <button onClick={ () => this.increment() }>Increment</button>
			</div>
		);
	}

}
