import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render(){
		return(
			<div>This app has been created manually without the React auto-generation</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"))